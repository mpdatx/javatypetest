import { Project } from "@atomist/rug/model/Project";
import { Given, ProjectScenarioWorld, Then, When } from "@atomist/rug/test/project/Core";
import * as helpers from "@atomist/rug/test/project/Helpers";

const fileContents = `package com.test;
/**
 * This is my class comment
 */
public class ThisClassDeclarationIsSoLongThatItMustBeBrokenUpOverTwoLines extends
    TheBaseClassAlsoHasALongName {
    /**
     * My method comment
     */
    public void methodOne() {}
    /**
     * My second method comment
     */
    public void methodTwo() {}
}`;

Given("a file named src/main/java/Test.java", (p: Project) => {
    p.addFile("src/main/java/Test.java", fileContents);
});

When("adding and removing a class annotation", (p, world) => {
    world.editWith(world.editor("AddAnnotation"), {path: "src/main/java/Test.java"});
});

When("adding and removing an import", (p, world: ProjectScenarioWorld) => {
    world.editWith(world.editor("AddImport"), {path: "src/main/java/Test.java"});
});

Then("the class declaration should be unchanged", (p: Project) => {
    console.log(helpers.dump(p, "src/main/java/Test.java"));
    return p.fileHasContent("src/main/java/Test.java", fileContents);
});
