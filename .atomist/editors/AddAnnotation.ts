import { JavaType } from "@atomist/rug/model/JavaType";
import { Project } from "@atomist/rug/model/Project";
import { Editor, Parameter, Tags } from "@atomist/rug/operations/Decorators";
import { EditProject } from "@atomist/rug/operations/ProjectEditor";
import { Pattern } from "@atomist/rug/operations/RugOperation";
import { PathExpressionEngine } from "@atomist/rug/tree/PathExpression";

/**
 * Sample TypeScript editor used by AddAddAnnotation.
 */
@Editor("AddAnnotation", "Add an annotation to a JavaType")
@Tags("documentation")
export class AddAnnotation implements EditProject {

    @Parameter({
        displayName: "file path",
        pattern: Pattern.any,
        validInput: "path to the java file to edit",
    })
    public path: string;

    public edit(project: Project) {
        const eng: PathExpressionEngine = project.context.pathExpressionEngine;
        eng.with<JavaType>(project, "//" + this.path + "/JavaType()", (c) => {
            c.addAnnotation("com.test.annotations", "MyAnnotation");
            c.removeAnnotation("com.test.annotations", "MyAnnotation");
        });
    }
}

export const addAnnotation = new AddAnnotation();
