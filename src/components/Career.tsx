import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Clock, DollarSign, Users, Briefcase, FileText, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const jobPositions = [
  {
    id: 1,
    title: "Senior AI Engineer",
    department: "Engineering",
    location: "Remote / San Francisco",
    type: "Full-time",
    salary: "$140k - $180k",
    experience: "5+ years",
    description: "Lead the development of next-generation AI agents and machine learning systems. Work with cutting-edge technologies to build scalable AI solutions for enterprise clients.",
    requirements: [
      "5+ years experience in AI/ML development",
      "Proficiency in Python, TensorFlow, PyTorch",
      "Experience with LLMs and neural networks", 
      "Strong background in distributed systems",
      "Experience with cloud platforms (AWS, GCP, Azure)"
    ],
    posted: "2 days ago"
  },
  {
    id: 2,
    title: "AI Product Manager",
    department: "Product",
    location: "Remote / New York",
    type: "Full-time", 
    salary: "$120k - $150k",
    experience: "3+ years",
    description: "Drive product strategy for AI-powered solutions. Collaborate with engineering and design teams to deliver innovative AI products that solve real business problems.",
    requirements: [
      "3+ years in product management",
      "Experience with AI/ML products",
      "Strong analytical and communication skills",
      "Background in B2B SaaS products",
      "Understanding of AI technologies and limitations"
    ],
    posted: "1 week ago"
  },
  {
    id: 3,
    title: "AI Solutions Architect", 
    department: "Solutions",
    location: "Remote",
    type: "Full-time",
    salary: "$130k - $170k", 
    experience: "4+ years",
    description: "Design and implement AI solutions for enterprise clients. Work closely with clients to understand their needs and architect scalable AI systems.",
    requirements: [
      "4+ years in solutions architecture",
      "Deep understanding of AI/ML technologies",
      "Experience with enterprise integrations", 
      "Strong client-facing skills",
      "Knowledge of cloud architecture patterns"
    ],
    posted: "3 days ago"
  },
  {
    id: 4,
    title: "AI Research Scientist",
    department: "Research",
    location: "Remote / Boston", 
    type: "Full-time",
    salary: "$150k - $200k",
    experience: "PhD preferred",
    description: "Conduct cutting-edge AI research to advance our agent capabilities. Publish research, prototype new algorithms, and push the boundaries of what's possible.",
    requirements: [
      "PhD in AI, ML, Computer Science or related field",
      "Strong publication record in top-tier venues",
      "Experience with transformer architectures",
      "Proficiency in research methodologies", 
      "Experience with large-scale model training"
    ],
    posted: "5 days ago"
  }
];

const ApplicationForm = ({ job, onClose }: { job: any, onClose: () => void }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    linkedIn: "",
    experience: "",
    coverLetter: "",
    resume: null as File | null
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate application submission
    toast({
      title: "Application Submitted!",
      description: `Your application for ${job.title} has been received. We'll get back to you within 5 business days.`,
    });
    
    onClose();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, resume: e.target.files[0] });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstName">First Name *</Label>
          <Input
            id="firstName"
            required
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          />
        </div>
        <div>
          <Label htmlFor="lastName">Last Name *</Label>
          <Input
            id="lastName" 
            required
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          />
        </div>
      </div>
      
      <div>
        <Label htmlFor="email">Email *</Label>
        <Input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      
      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>
      
      <div>
        <Label htmlFor="linkedIn">LinkedIn Profile</Label>
        <Input
          id="linkedIn"
          type="url"
          placeholder="https://linkedin.com/in/yourprofile"
          value={formData.linkedIn}
          onChange={(e) => setFormData({ ...formData, linkedIn: e.target.value })}
        />
      </div>
      
      <div>
        <Label htmlFor="experience">Years of Experience *</Label>
        <Select required onValueChange={(value) => setFormData({ ...formData, experience: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Select experience level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0-1">0-1 years</SelectItem>
            <SelectItem value="2-3">2-3 years</SelectItem>
            <SelectItem value="4-5">4-5 years</SelectItem>
            <SelectItem value="6-10">6-10 years</SelectItem>
            <SelectItem value="10+">10+ years</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <Label htmlFor="resume">Resume/CV *</Label>
        <div className="mt-2 border-2 border-dashed border-border rounded-lg p-6 text-center hover:bg-muted/50 transition-colors cursor-pointer">
          <input
            id="resume"
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="hidden"
            required
          />
          <label htmlFor="resume" className="cursor-pointer">
            <Upload className="mx-auto h-12 w-12 text-secondary mb-4" />
            <p className="text-sm text-secondary">
              {formData.resume ? formData.resume.name : "Click to upload or drag and drop"}
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              PDF, DOC, DOCX up to 10MB
            </p>
          </label>
        </div>
      </div>
      
      <div>
        <Label htmlFor="coverLetter">Cover Letter</Label>
        <Textarea
          id="coverLetter"
          placeholder="Tell us why you're interested in this role and what makes you a great fit..."
          rows={4}
          value={formData.coverLetter}
          onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
        />
      </div>
      
      <div className="flex gap-4 pt-4">
        <Button type="submit" className="btn-primary flex-1">
          Submit Application
        </Button>
        <Button type="button" variant="outline" onClick={onClose}>
          Cancel
        </Button>
      </div>
    </form>
  );
};

const Career = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const departments = ["All", "Engineering", "Product", "Solutions", "Research"];
  
  const filteredJobs = selectedDepartment === "All" 
    ? jobPositions 
    : jobPositions.filter(job => job.department === selectedDepartment);

  return (
    <section id="career" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-headline mb-6">
            Join Our <span className="gradient-text">AI Revolution</span>
          </h2>
          <p className="text-lead max-w-3xl mx-auto">
            Build the future of AI with us. We're looking for passionate individuals 
            who want to shape how businesses transform through artificial intelligence.
          </p>
        </div>

        {/* Department Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {departments.map((dept) => (
            <Button
              key={dept}
              variant={selectedDepartment === dept ? "default" : "outline"}
              onClick={() => setSelectedDepartment(dept)}
              className={selectedDepartment === dept ? "btn-primary" : ""}
            >
              {dept}
            </Button>
          ))}
        </div>

        {/* Job Listings */}
        <div className="grid gap-8">
          {filteredJobs.map((job) => (
            <Card key={job.id} className="card-hover p-8">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-title text-foreground mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-secondary">
                        <span className="flex items-center gap-1">
                          <Briefcase size={16} />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={16} />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={16} />
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign size={16} />
                          {job.salary}
                        </span>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {job.posted}
                    </Badge>
                  </div>
                  
                  <p className="text-secondary mb-4 leading-relaxed">
                    {job.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">Requirements:</h4>
                    <ul className="space-y-1 text-sm text-secondary">
                      {job.requirements.slice(0, 3).map((req, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary mr-2 mt-1">•</span>
                          {req}
                        </li>
                      ))}
                      {job.requirements.length > 3 && (
                        <li className="text-muted-foreground text-xs">
                          +{job.requirements.length - 3} more requirements
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
                
                <div className="lg:ml-8 flex-shrink-0">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="btn-primary w-full lg:w-auto">
                        Apply Now
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Apply for {job.title}</DialogTitle>
                      </DialogHeader>
                      <ApplicationForm 
                        job={job} 
                        onClose={() => {
                          const closeButton = document.querySelector('[data-dialog-close]') as HTMLButtonElement;
                          closeButton?.click();
                        }}
                      />
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <Users className="mx-auto h-16 w-16 text-secondary mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              No positions available in {selectedDepartment}
            </h3>
            <p className="text-secondary">
              Check back later or explore other departments.
            </p>
          </div>
        )}

        {/* Company Culture Section */}
        <div className="mt-20 pt-16 border-t border-border">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Why Join <span className="gradient-text">AgentBiz</span>?
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="text-primary" size={32} />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Cutting-Edge Work</h4>
                <p className="text-secondary text-sm leading-relaxed">
                  Work on the most advanced AI technologies and shape the future of business automation.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="text-primary" size={32} />
                </div>
                <h4 className="font-semibold text-foreground mb-2">World-Class Team</h4>
                <p className="text-secondary text-sm leading-relaxed">
                  Collaborate with top AI researchers, engineers, and business experts from around the world.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="text-primary" size={32} />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Competitive Package</h4>
                <p className="text-secondary text-sm leading-relaxed">
                  Competitive salary, equity, comprehensive benefits, and flexible remote work options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;