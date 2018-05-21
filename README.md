Steps to Implement Cucmber framework:

1. Install cucumber plugin for eclipse
2. Create a java project
3. Download following jars and add those to buildpath of your project( You can jus add as dependencies , if it is maven project)
	
	cucumber-core
	cucumber-java
	cucumber-junit
	cucumber-jvm-deps
	cucumber-reporting
	gherkin
	junit
4. Get feature file from business and place it under a folder (Recommended folder name is Features)
5. Create step definition file for all steps under the given feature and place it under a folder( Recommended folder name is stepDefintions)
6. Create TestRunner.java file with valid syntax and place it under a packeg inside src folder.
7. Run TestRunner.java file as Junit.
