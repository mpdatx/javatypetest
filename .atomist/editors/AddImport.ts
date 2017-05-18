import { JavaType } from "@atomist/rug/model/JavaType";
import { Project } from "@atomist/rug/model/Project";
import { Editor, Parameter, Tags } from "@atomist/rug/operations/Decorators";
import { EditProject } from "@atomist/rug/operations/ProjectEditor";
import { Pattern } from "@atomist/rug/operations/RugOperation";
import { PathExpressionEngine } from "@atomist/rug/tree/PathExpression";

/**
 * Sample TypeScript editor used by AddAddImport.
 */
@Editor("AddImport", "Add an import to a JavaType")
@Tags("documentation")
export class AddImport implements EditProject {

    @Parameter({
        displayName: "path",
        description: "example of how to specify a parameter using decorators",
        pattern: Pattern.any,
        validInput: "a description of the valid input",
        minLength: 1,
        maxLength: 100,
    })
    public path: string;

    public edit(project: Project) {
        const eng: PathExpressionEngine = project.context.pathExpressionEngine;
        eng.with<JavaType>(project, "//" + this.path + "/JavaType()", (c) => {
            c.addImport("com.test.testimport");
            c.removeImport("com.test.testimport");
        });
    }
}

export const addImport = new AddImport();
