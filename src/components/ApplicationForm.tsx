import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { createApplication } from "@/lib/applications";
import { Loader2, CheckCircle, Upload } from "lucide-react";
import { useTranslation } from "@/i18n/useTranslation";
import { useJobPositions } from "@/i18n/hooks";

interface ApplicationFormProps {
  position?: string;
  positionLabel?: string;
  onClose?: () => void;
}

const ApplicationForm = ({ position, positionLabel, onClose }: ApplicationFormProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const jobPositions = useJobPositions();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: position || "",
    experience: "",
    cover_letter: "",
    cv_url: "",
    cv_file_name: "",
  });
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCvFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!cvFile) {
      alert(t("application.cvRequired"));
      return;
    }

    try {
      setLoading(true);
      await createApplication(formData, cvFile);
      onClose?.();
      navigate("/thank-you/careers");
    } catch (error) {
      console.error("Error submitting application:", error);
      alert(t("application.submitError"));
    } finally {
      setLoading(false);
    }
  };

  const displayPosition = positionLabel || position || t("application.position");

  if (submitted) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="text-center py-8">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">{t("application.successTitle")}</h3>
          <p className="text-muted-foreground">{t("application.successBody")}</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>
          {t("application.applyTo")} {displayPosition}
        </CardTitle>
        <CardDescription>{t("application.description")}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">{t("application.fullName")} *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder={t("application.namePlaceholder")}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">{t("application.email")} *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder={t("application.emailPlaceholder")}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">{t("application.phone")}</Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+1 (555) 123-4567"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="position">{t("application.positionLabel")} *</Label>
              <Select
                value={formData.position}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, position: value }))}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder={t("application.selectPosition")} />
                </SelectTrigger>
                <SelectContent>
                  {jobPositions.map((job) => (
                    <SelectItem key={job.id} value={job.positionValue}>
                      {job.title}
                    </SelectItem>
                  ))}
                  <SelectItem value="Data Scientist">{t("application.otherPositions.dataScientist")}</SelectItem>
                  <SelectItem value="Machine Learning Engineer">
                    {t("application.otherPositions.mlEngineer")}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="experience">{t("application.experience")} *</Label>
            <Textarea
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              required
              placeholder={t("application.experiencePlaceholder")}
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cover_letter">{t("application.coverLetter")}</Label>
            <Textarea
              id="cover_letter"
              name="cover_letter"
              value={formData.cover_letter}
              onChange={handleInputChange}
              placeholder={t("application.coverLetterPlaceholder")}
              rows={4}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cv">{t("application.cv")} *</Label>
            <div className="flex items-center gap-2">
              <Input
                id="cv"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                required
                className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
              />
              {cvFile && (
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <Upload className="h-4 w-4" />
                  {cvFile.name}
                </div>
              )}
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <Button type="submit" disabled={loading} className="flex-1">
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {t("application.submitting")}
                </>
              ) : (
                t("application.submit")
              )}
            </Button>

            {onClose && (
              <Button type="button" variant="outline" onClick={onClose} disabled={loading}>
                {t("application.cancel")}
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ApplicationForm;
