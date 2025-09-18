import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Users, BookOpen, TrendingUp, Calendar, FileText } from "lucide-react";
import StudentDashboard from "./StudentDashboard";
import FacultyDashboard from "./FacultyDashboard";

type UserRole = 'student' | 'faculty' | null;

const LandingPage = () => {
  const [selectedRole, setSelectedRole] = useState<UserRole>(null);

  if (selectedRole === 'student') {
    return <StudentDashboard onBack={() => setSelectedRole(null)} />;
  }

  if (selectedRole === 'faculty') {
    return <FacultyDashboard onBack={() => setSelectedRole(null)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10" />
        <div className="relative container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-gradient-hero rounded-2xl shadow-hero">
                <GraduationCap className="h-8 w-8 text-primary-foreground" />
              </div>
              <h1 className="text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                Kaksha
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Modern classroom management system with integrated attendance tracking, 
              homework assignments, and seamless communication between students and faculty.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2">
                <BookOpen className="h-4 w-4 mr-2" />
                Subject Management
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <Calendar className="h-4 w-4 mr-2" />
                Attendance Tracking
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <FileText className="h-4 w-4 mr-2" />
                Assignment Portal
              </Badge>
            </div>
          </div>

          {/* Role Selection Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card 
              className="group p-8 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-card bg-gradient-card border-0 relative overflow-hidden"
              onClick={() => setSelectedRole('student')}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-accent opacity-10 rounded-full transform translate-x-16 -translate-y-16" />
              <div className="relative">
                <div className="p-4 bg-accent/10 rounded-2xl w-fit mb-6 group-hover:bg-accent/20 transition-colors">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Student Portal</h3>
                <p className="text-muted-foreground mb-6">
                  Access your subjects, view attendance records, submit assignments, 
                  and stay updated with class announcements.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <TrendingUp className="h-4 w-4 mr-2 text-accent" />
                    Track attendance percentage
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <FileText className="h-4 w-4 mr-2 text-accent" />
                    Submit homework assignments
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <BookOpen className="h-4 w-4 mr-2 text-accent" />
                    View subject materials
                  </div>
                </div>
              </div>
            </Card>

            <Card 
              className="group p-8 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-card bg-gradient-card border-0 relative overflow-hidden"
              onClick={() => setSelectedRole('faculty')}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-hero opacity-10 rounded-full transform translate-x-16 -translate-y-16" />
              <div className="relative">
                <div className="p-4 bg-primary/10 rounded-2xl w-fit mb-6 group-hover:bg-primary/20 transition-colors">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Faculty Portal</h3>
                <p className="text-muted-foreground mb-6">
                  Manage your classes, mark attendance, create assignments, 
                  and communicate with students efficiently.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2 text-primary" />
                    Mark student attendance
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <FileText className="h-4 w-4 mr-2 text-primary" />
                    Create assignments & notices
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-2 text-primary" />
                    Manage class rosters
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground">
              Choose your role to access the appropriate dashboard and features
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;