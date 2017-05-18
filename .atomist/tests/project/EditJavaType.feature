Feature: Editing a JavaType
    This should not impact the formatting of the class declaration

Scenario: Adding an removing an import
    Given a file named src/main/java/Test.java
    When adding and removing an import
    Then the class declaration should be unchanged

Scenario: Adding and removing an annotation
    Given a file named src/main/java/Test.java
    When adding and removing a class annotation
    When adding and removing a class annotation
    Then the class declaration should be unchanged
    