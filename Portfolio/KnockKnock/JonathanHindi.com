
Microsoft Visual Studio Solution File, Format Version 12.00
# Visual Studio 2012
Project("{E24C65DC-7377-472B-9ABA-BC803B73C61A}") = "JonathanHindi.com", "..\JonathanHindi.com\", "{10B44F4E-15B2-49F0-9E17-223FA134316E}"
	ProjectSection(WebsiteProperties) = preProject
		TargetFrameworkMoniker = ".NETFramework,Version%3Dv4.0"
		Debug.AspNetCompiler.VirtualPath = "/JonathanHindi.com"
		Debug.AspNetCompiler.PhysicalPath = "E:\Work\Joanthan\JonathanHindi.com\"
		Debug.AspNetCompiler.TargetPath = "PrecompiledWeb\JonathanHindi.com\"
		Debug.AspNetCompiler.Updateable = "true"
		Debug.AspNetCompiler.ForceOverwrite = "true"
		Debug.AspNetCompiler.FixedNames = "false"
		Debug.AspNetCompiler.Debug = "True"
		Release.AspNetCompiler.VirtualPath = "/JonathanHindi.com"
		Release.AspNetCompiler.PhysicalPath = "E:\Work\Joanthan\JonathanHindi.com\"
		Release.AspNetCompiler.TargetPath = "PrecompiledWeb\JonathanHindi.com\"
		Release.AspNetCompiler.Updateable = "true"
		Release.AspNetCompiler.ForceOverwrite = "true"
		Release.AspNetCompiler.FixedNames = "false"
		Release.AspNetCompiler.Debug = "False"
		VWDPort = "59191"
	EndProjectSection
EndProject
Global
	GlobalSection(SolutionConfigurationPlatforms) = preSolution
		Debug|Any CPU = Debug|Any CPU
	EndGlobalSection
	GlobalSection(ProjectConfigurationPlatforms) = postSolution
		{10B44F4E-15B2-49F0-9E17-223FA134316E}.Debug|Any CPU.ActiveCfg = Debug|Any CPU
		{10B44F4E-15B2-49F0-9E17-223FA134316E}.Debug|Any CPU.Build.0 = Debug|Any CPU
	EndGlobalSection
	GlobalSection(SolutionProperties) = preSolution
		HideSolutionNode = FALSE
	EndGlobalSection
EndGlobal
