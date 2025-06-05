import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import {
  getProjects,
  getSkills,
  addProject,
  addSkill,
  updateProject,
  updateSkill,
  deleteProject,
  deleteSkill,
  uploadResume,
} from "@/lib/services";
import { Project, Skill } from "@/utils/types";

const AdminPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const projectForm = useForm<Project>();
  const skillForm = useForm<Skill>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projectsData, skillsData] = await Promise.all([
          getProjects(),
          getSkills(),
        ]);
        setProjects(projectsData);
        setSkills(skillsData);
      } catch (error) {
        console.error("Error fetching data:", error);
        toast({
          title: "Error",
          description: "Failed to fetch data",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleProjectSubmit = async (data: Project) => {
    try {
      if (data.id) {
        await updateProject(data.id, data);
        toast({
          title: "Success",
          description: "Project updated successfully",
        });
      } else {
        await addProject(data);
        toast({
          title: "Success",
          description: "Project added successfully",
        });
      }

      // Refresh projects
      const projectsData = await getProjects();
      setProjects(projectsData);
      projectForm.reset();
    } catch (error) {
      console.error("Error handling project:", error);
      toast({
        title: "Error",
        description: "Failed to save project",
        variant: "destructive",
      });
    }
  };

  const handleSkillSubmit = async (data: Skill) => {
    try {
      if (data.id) {
        await updateSkill(data.id, data);
        toast({
          title: "Success",
          description: "Skill updated successfully",
        });
      } else {
        await addSkill(data);
        toast({
          title: "Success",
          description: "Skill added successfully",
        });
      }

      // Refresh skills
      const skillsData = await getSkills();
      setSkills(skillsData);
      skillForm.reset();
    } catch (error) {
      console.error("Error handling skill:", error);
      toast({
        title: "Error",
        description: "Failed to save skill",
        variant: "destructive",
      });
    }
  };

  const handleResumeUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const downloadUrl = await uploadResume(file);
      toast({
        title: "Success",
        description: "Resume uploaded successfully",
      });
    } catch (error) {
      console.error("Error uploading resume:", error);
      toast({
        title: "Error",
        description: "Failed to upload resume",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 space-y-8">
      <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>

      {/* Projects Section */}
      <Card>
        <CardHeader>
          <CardTitle>Projects</CardTitle>
          <CardDescription>Manage your portfolio projects</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={projectForm.handleSubmit(handleProjectSubmit)}
            className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input {...projectForm.register("title")} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select
                  onValueChange={(value) =>
                    projectForm.setValue(
                      "category",
                      value as Project["category"]
                    )
                  }>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="web">Web</SelectItem>
                    <SelectItem value="mobile">Mobile</SelectItem>
                    <SelectItem value="backend">Backend</SelectItem>
                    <SelectItem value="data">Data</SelectItem>
                    <SelectItem value="ai">AI</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea {...projectForm.register("description")} />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="githubUrl">GitHub URL</Label>
                <Input {...projectForm.register("githubUrl")} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="liveUrl">Live URL</Label>
                <Input {...projectForm.register("liveUrl")} />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="featured"
                checked={projectForm.watch("featured")}
                onCheckedChange={(checked) =>
                  projectForm.setValue("featured", checked)
                }
              />
              <Label htmlFor="featured">Featured Project</Label>
            </div>

            <Button type="submit">Save Project</Button>
          </form>

          {/* Projects List */}
          <div className="mt-8 space-y-4">
            {projects.map((project) => (
              <Card key={project.id}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">{project.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {project.description}
                      </p>
                    </div>
                    <div className="space-x-2">
                      <Button
                        variant="outline"
                        onClick={() => projectForm.reset(project)}>
                        Edit
                      </Button>
                      <Button
                        variant="destructive"
                        onClick={() => deleteProject(project.id)}>
                        Delete
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Skills Section */}
      <Card>
        <CardHeader>
          <CardTitle>Skills</CardTitle>
          <CardDescription>Manage your technical skills</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={skillForm.handleSubmit(handleSkillSubmit)}
            className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input {...skillForm.register("name")} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select
                  onValueChange={(value) =>
                    skillForm.setValue("category", value as Skill["category"])
                  }>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="languages">Languages</SelectItem>
                    <SelectItem value="frameworks">Frameworks</SelectItem>
                    <SelectItem value="databases">Databases</SelectItem>
                    <SelectItem value="devops">DevOps</SelectItem>
                    <SelectItem value="apis">APIs</SelectItem>
                    <SelectItem value="collaboration">Collaboration</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="icon">Icon</Label>
              <Input {...skillForm.register("icon")} />
            </div>

            <Button type="submit">Save Skill</Button>
          </form>

          {/* Skills List */}
          <div className="mt-8 space-y-4">
            {skills.map((skill) => (
              <Card key={skill.id}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">{skill.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {skill.category}
                      </p>
                    </div>
                    <div className="space-x-2">
                      <Button
                        variant="outline"
                        onClick={() => skillForm.reset(skill)}>
                        Edit
                      </Button>
                      <Button
                        variant="destructive"
                        onClick={() => deleteSkill(skill.id)}>
                        Delete
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Resume Upload Section */}
      <Card>
        <CardHeader>
          <CardTitle>Resume</CardTitle>
          <CardDescription>Upload your resume</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleResumeUpload}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminPage;
