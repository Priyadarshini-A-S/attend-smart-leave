import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Users, Calendar, AlertCircle, Bell } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

const Parent = () => {
  const children = [
    { id: 1, name: "John Doe", class: "10-A", attendance: 92, leaves: 3 },
    { id: 2, name: "Jane Doe", class: "8-B", attendance: 88, leaves: 5 },
  ];

  const recentActivity = [
    { child: "John Doe", activity: "Medical leave approved", date: "2024-01-15", type: "Medical" },
    { child: "Jane Doe", activity: "Marked absent", date: "2024-01-20", type: "Absent" },
    { child: "John Doe", activity: "Good attendance milestone", date: "2024-01-10", type: "Achievement" },
  ];

  const notifications = [
    { message: "Jane's attendance fell below 90%", time: "3 hours ago", type: "warning" },
    { message: "John's leave request approved", time: "1 day ago", type: "success" },
  ];

  const getLeaveColor = (type: string) => {
    switch (type) {
      case "Medical":
        return "bg-medical-bg text-medical border-medical";
      case "Absent":
        return "bg-destructive/10 text-destructive border-destructive";
      case "Achievement":
        return "bg-success/10 text-success border-success";
      default:
        return "";
    }
  };

  return (
    <DashboardLayout role="parent">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Parent Dashboard</h1>
          <p className="text-muted-foreground">Monitor your children's attendance and leave records</p>
        </div>

        {/* Children Overview */}
        <div className="grid gap-6 md:grid-cols-2">
          {children.map((child) => (
            <Card key={child.id} className="shadow-card hover:shadow-hover transition-smooth">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>{child.name}</CardTitle>
                    <CardDescription>Class {child.class}</CardDescription>
                  </div>
                  <Users className="h-8 w-8 text-primary" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Attendance</span>
                    <span className="text-sm font-bold">{child.attendance}%</span>
                  </div>
                  <Progress value={child.attendance} />
                </div>
                <div className="flex items-center justify-between pt-2 border-t">
                  <span className="text-sm text-muted-foreground">Total Leaves</span>
                  <Badge variant="secondary">{child.leaves} days</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Activity */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Recent Activity
            </CardTitle>
            <CardDescription>Latest updates for your children</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent transition-smooth"
                >
                  <div className="space-y-1">
                    <p className="font-medium">{activity.child}</p>
                    <p className="text-sm text-muted-foreground">{activity.activity}</p>
                    <p className="text-xs text-muted-foreground">{activity.date}</p>
                  </div>
                  <Badge variant="outline" className={getLeaveColor(activity.type)}>
                    {activity.type}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Notifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {notifications.map((notification, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 border rounded-lg"
                >
                  <AlertCircle
                    className={`h-5 w-5 mt-0.5 ${
                      notification.type === "success" ? "text-success" : "text-warning"
                    }`}
                  />
                  <div className="flex-1">
                    <p className="text-sm">{notification.message}</p>
                    <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Parent;
