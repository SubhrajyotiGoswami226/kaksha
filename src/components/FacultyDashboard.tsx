import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, BookOpen, Users, FileText, Calendar, Upload, Download, Plus, CheckCircle } from "lucide-react";

interface FacultyDashboardProps {
  onBack: () => void;
}

const FacultyDashboard = ({ onBack }: FacultyDashboardProps) => {
  const facultyData = {
    name: "Dr. Priya Mehta",
    department: "Computer Science",
    branch: "Engineering",
    employeeId: "FAC001",
  };

  const subjects = [
    {
      name: "Data Structures & Algorithms",
      code: "CS301",
      semester: "6th",
      students: 45,
      totalClasses: 40,
      avgAttendance: 85,
      pendingGrading: 12,
    },
    {
      name: "Programming Fundamentals",
      code: "CS101",
      semester: "2nd", 
      students: 60,
      totalClasses: 35,
      avgAttendance: 78,
      pendingGrading: 8,
    },
    {
      name: "Advanced Algorithms",
      code: "CS401",
      semester: "8th",
      students: 32,
      totalClasses: 38,
      avgAttendance: 92,
      pendingGrading: 5,
    },
  ];

  const recentActivity = [
    {
      action: "Attendance marked",
      subject: "Data Structures & Algorithms",
      time: "2 hours ago",
      icon: CheckCircle,
      color: "text-accent",
    },
    {
      action: "Assignment created",
      subject: "Programming Fundamentals", 
      time: "1 day ago",
      icon: FileText,
      color: "text-primary",
    },
    {
      action: "Roster updated",
      subject: "Advanced Algorithms",
      time: "2 days ago",
      icon: Users,
      color: "text-warning",
    },
  ];

  const todaySchedule = [
    {
      time: "09:00 AM",
      subject: "Data Structures & Algorithms",
      room: "Room 301",
      type: "Lecture",
    },
    {
      time: "11:00 AM", 
      subject: "Programming Fundamentals",
      room: "Lab 201",
      type: "Practical",
    },
    {
      time: "02:00 PM",
      subject: "Advanced Algorithms",
      room: "Room 401",
      type: "Tutorial",
    },
  ];

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
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-3xl font-bold">Faculty Dashboard</h1>
              <p className="text-muted-foreground">Welcome back, {facultyData.name}</p>
            </div>
          </div>
          <Card className="p-4 bg-gradient-card border-0">
            <div className="text-sm text-muted-foreground">Faculty ID</div>
            <div className="font-semibold">{facultyData.employeeId}</div>
            <div className="text-xs text-muted-foreground mt-1">
              {facultyData.department} Department
            </div>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Button className="p-6 h-auto flex-col gap-2 bg-gradient-hero border-0 shadow-soft">
            <Plus className="h-6 w-6" />
            <span>Create Assignment</span>
          </Button>
          <Button variant="secondary" className="p-6 h-auto flex-col gap-2 shadow-soft">
            <Calendar className="h-6 w-6" />
            <span>Mark Attendance</span>
          </Button>
          <Button variant="secondary" className="p-6 h-auto flex-col gap-2 shadow-soft">
            <Upload className="h-6 w-6" />
            <span>Upload Roster</span>
          </Button>
          <Button variant="secondary" className="p-6 h-auto flex-col gap-2 shadow-soft">
            <Download className="h-6 w-6" />
            <span>Export Data</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="subjects" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3 bg-muted/50">
                <TabsTrigger value="subjects">My Subjects</TabsTrigger>
                <TabsTrigger value="attendance">Attendance</TabsTrigger>
                <TabsTrigger value="assignments">Assignments</TabsTrigger>
              </TabsList>

              <TabsContent value="subjects" className="space-y-4">
                {subjects.map((subject, index) => (
                  <Card key={index} className="p-6 bg-gradient-card border-0 shadow-soft hover:shadow-card transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-lg">{subject.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {subject.code} • {subject.semester} Semester • {subject.students} students
                        </p>
                      </div>
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        Active
                      </Badge>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center p-3 bg-accent/10 rounded-lg">
                        <div className="text-2xl font-bold text-accent">{subject.avgAttendance}%</div>
                        <div className="text-xs text-muted-foreground">Avg Attendance</div>
                      </div>
                      <div className="text-center p-3 bg-primary/10 rounded-lg">
                        <div className="text-2xl font-bold text-primary">{subject.totalClasses}</div>
                        <div className="text-xs text-muted-foreground">Classes Held</div>
                      </div>
                      <div className="text-center p-3 bg-warning/10 rounded-lg">
                        <div className="text-2xl font-bold text-warning">{subject.pendingGrading}</div>
                        <div className="text-xs text-muted-foreground">Pending Grading</div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" className="bg-primary/10 text-primary hover:bg-primary/20">
                        View Details
                      </Button>
                      <Button size="sm" variant="ghost">
                        Mark Attendance
                      </Button>
                      <Button size="sm" variant="ghost">
                        Create Assignment
                      </Button>
                    </div>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="attendance" className="space-y-4">
                <Card className="p-6 bg-gradient-card border-0 shadow-soft">
                  <h3 className="font-semibold text-lg mb-4">Quick Attendance Entry</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-muted-foreground">Select Subject</label>
                        <select className="w-full p-2 rounded-lg border bg-background">
                          <option>Data Structures & Algorithms</option>
                          <option>Programming Fundamentals</option>
                          <option>Advanced Algorithms</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground">Date</label>
                        <input type="date" className="w-full p-2 rounded-lg border bg-background" />
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-hero">
                      Open Attendance Sheet
                    </Button>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="assignments" className="space-y-4">
                <Card className="p-6 bg-gradient-card border-0 shadow-soft">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-lg">Assignment Management</h3>
                    <Button size="sm" className="bg-gradient-hero">
                      <Plus className="h-4 w-4 mr-2" />
                      New Assignment
                    </Button>
                  </div>
                  <div className="space-y-3">
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-medium">Binary Search Tree Implementation</h4>
                          <p className="text-sm text-muted-foreground">Data Structures & Algorithms</p>
                          <p className="text-xs text-muted-foreground">Due: Jan 20, 2024</p>
                        </div>
                        <Badge variant="secondary" className="bg-warning/10 text-warning">
                          12 Pending Reviews
                        </Badge>
                      </div>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-medium">Hello World Program</h4>
                          <p className="text-sm text-muted-foreground">Programming Fundamentals</p>
                          <p className="text-xs text-muted-foreground">Due: Jan 18, 2024</p>
                        </div>
                        <Badge variant="secondary" className="bg-accent/10 text-accent">
                          All Reviewed
                        </Badge>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Today's Schedule */}
            <Card className="p-6 bg-gradient-card border-0 shadow-soft">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Today's Schedule
              </h3>
              <div className="space-y-3">
                {todaySchedule.map((item, index) => (
                  <div key={index} className="p-3 bg-background rounded-lg">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="font-medium text-sm">{item.subject}</div>
                        <div className="text-xs text-muted-foreground">{item.room} • {item.type}</div>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {item.time}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Recent Activity */}
            <Card className="p-6 bg-gradient-card border-0 shadow-soft">
              <h3 className="font-semibold text-lg mb-4">Recent Activity</h3>
              <div className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className={`p-1 rounded-full ${activity.color}`}>
                      <activity.icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">{activity.action}</div>
                      <div className="text-xs text-muted-foreground">{activity.subject}</div>
                      <div className="text-xs text-muted-foreground">{activity.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Statistics */}
            <Card className="p-6 bg-gradient-accent border-0 shadow-soft">
              <h3 className="font-medium text-accent-foreground mb-4">This Month</h3>
              <div className="space-y-3 text-accent-foreground/80">
                <div className="flex justify-between text-sm">
                  <span>Classes Conducted</span>
                  <span className="font-semibold">24</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Assignments Created</span>
                  <span className="font-semibold">6</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Average Attendance</span>
                  <span className="font-semibold">85%</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyDashboard;