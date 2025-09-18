import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, BookOpen, Calendar, FileText, TrendingUp, Clock, AlertCircle, LogOut } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useAuth } from "./AuthProvider";

interface StudentDashboardProps {
  onBack: () => void;
}

const StudentDashboard = ({ onBack }: StudentDashboardProps) => {
  const { user } = useAuth();
  
  const studentData = {
    name: user?.username === 'student' ? "Aarav Sharma" : user?.username || "Student",
    rollNumber: "CS21B1001",
    semester: "6th Semester",
    branch: "Computer Science",
    department: "Engineering",
  };

  const subjects = [
    {
      name: "Data Structures & Algorithms",
      code: "CS301",
      faculty: "Dr. Priya Mehta",
      attendance: 85,
      totalClasses: 40,
      attendedClasses: 34,
      pendingAssignments: 2,
      lastClass: "2024-01-15",
    },
    {
      name: "Database Management Systems",
      code: "CS302",
      faculty: "Prof. Rajesh Kumar",
      attendance: 92,
      totalClasses: 38,
      attendedClasses: 35,
      pendingAssignments: 1,
      lastClass: "2024-01-14",
    },
    {
      name: "Computer Networks",
      code: "CS303",
      faculty: "Dr. Sneha Patel",
      attendance: 78,
      totalClasses: 35,
      attendedClasses: 27,
      pendingAssignments: 0,
      lastClass: "2024-01-13",
    },
    {
      name: "Software Engineering",
      code: "CS304",
      faculty: "Prof. Amit Singh",
      attendance: 90,
      totalClasses: 42,
      attendedClasses: 38,
      pendingAssignments: 3,
      lastClass: "2024-01-16",
    },
  ];

  const recentAssignments = [
    {
      title: "Binary Search Tree Implementation",
      subject: "Data Structures & Algorithms",
      dueDate: "2024-01-20",
      status: "pending" as const,
    },
    {
      title: "Database Normalization Exercise",
      subject: "Database Management Systems",
      dueDate: "2024-01-18",
      status: "submitted" as const,
    },
    {
      title: "Network Protocol Analysis",
      subject: "Computer Networks",
      dueDate: "2024-01-25",
      status: "pending" as const,
    },
  ];

  const getAttendanceColor = (percentage: number) => {
    if (percentage >= 85) return "text-accent";
    if (percentage >= 75) return "text-warning";
    return "text-destructive";
  };

  const getAttendanceBgColor = (percentage: number) => {
    if (percentage >= 85) return "bg-accent/10";
    if (percentage >= 75) return "bg-warning/10";
    return "bg-destructive/10";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={onBack}
              className="hover:bg-primary/10"
            >
              <LogOut className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-3xl font-bold">Student Dashboard</h1>
              <p className="text-muted-foreground">Welcome back, {studentData.name}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Card className="p-4 bg-gradient-card border-0">
              <div className="text-sm text-muted-foreground">Student ID</div>
              <div className="font-semibold">{studentData.rollNumber}</div>
              <div className="text-xs text-muted-foreground mt-1">
                {studentData.semester} • {studentData.branch}
              </div>
            </Card>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-gradient-card border-0 shadow-soft">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Subjects</p>
                <p className="text-2xl font-bold">{subjects.length}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-card border-0 shadow-soft">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-accent/10 rounded-lg">
                <TrendingUp className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Avg Attendance</p>
                <p className="text-2xl font-bold">
                  {Math.round(subjects.reduce((acc, s) => acc + s.attendance, 0) / subjects.length)}%
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-card border-0 shadow-soft">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-warning/10 rounded-lg">
                <FileText className="h-5 w-5 text-warning" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Pending Tasks</p>
                <p className="text-2xl font-bold">
                  {subjects.reduce((acc, s) => acc + s.pendingAssignments, 0)}
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-card border-0 shadow-soft">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">This Semester</p>
                <p className="text-2xl font-bold">{studentData.semester}</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Subjects */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              My Subjects
            </h2>
            <div className="space-y-4">
              {subjects.map((subject, index) => (
                <Card key={index} className="p-6 bg-gradient-card border-0 shadow-soft hover:shadow-card transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-lg">{subject.name}</h3>
                      <p className="text-sm text-muted-foreground">{subject.code} • {subject.faculty}</p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${getAttendanceBgColor(subject.attendance)} ${getAttendanceColor(subject.attendance)}`}>
                      {subject.attendance}%
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Attendance</span>
                        <span>{subject.attendedClasses}/{subject.totalClasses} classes</span>
                      </div>
                      <Progress value={subject.attendance} className="h-2" />
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          Last: {subject.lastClass}
                        </div>
                        {subject.pendingAssignments > 0 && (
                          <div className="flex items-center gap-1 text-warning">
                            <AlertCircle className="h-4 w-4" />
                            {subject.pendingAssignments} pending
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Recent Assignments */}
          <div>
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Recent Assignments
            </h2>
            <div className="space-y-4">
              {recentAssignments.map((assignment, index) => (
                <Card key={index} className="p-4 bg-gradient-card border-0 shadow-soft">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-medium text-sm">{assignment.title}</h3>
                    <Badge 
                      variant={assignment.status === 'submitted' ? 'default' : 'secondary'}
                      className={assignment.status === 'submitted' ? 'bg-accent text-accent-foreground' : ''}
                    >
                      {assignment.status}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{assignment.subject}</p>
                  <p className="text-xs text-muted-foreground">Due: {assignment.dueDate}</p>
                </Card>
              ))}
            </div>

            <Card className="mt-6 p-4 bg-gradient-accent border-0 shadow-soft">
              <h3 className="font-medium text-accent-foreground mb-2">Academic Calendar</h3>
              <div className="space-y-2 text-sm text-accent-foreground/80">
                <div className="flex justify-between">
                  <span>Mid-term Exams</span>
                  <span>Feb 15-22</span>
                </div>
                <div className="flex justify-between">
                  <span>Project Submissions</span>
                  <span>Mar 1-5</span>
                </div>
                <div className="flex justify-between">
                  <span>Final Exams</span>
                  <span>Apr 20-30</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;