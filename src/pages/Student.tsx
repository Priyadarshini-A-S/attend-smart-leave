import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Calendar, AlertCircle, CheckCircle, Clock, FileText, Bell } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import LeaveRequestForm from "@/components/LeaveRequestForm";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const Student = () => {
  const [showLeaveForm, setShowLeaveForm] = useState(false);
  
  const attendancePercentage = 87;
  const requiredPercentage = 75;
  
  const leaveHistory = [
    { id: 1, type: "Medical", date: "2024-01-15", status: "Approved", days: 2 },
    { id: 2, type: "Personal", date: "2024-01-20", status: "Pending", days: 1 },
    { id: 3, type: "Casual", date: "2024-01-10", status: "Approved", days: 1 },
  ];

  const notifications = [
    { id: 1, message: "Your leave request has been approved", time: "2 hours ago", type: "success" },
    { id: 2, message: "Attendance below 90%, maintain good attendance", time: "1 day ago", type: "warning" },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Approved":
        return <CheckCircle className="h-4 w-4 text-success" />;
      case "Pending":
        return <Clock className="h-4 w-4 text-warning" />;
      default:
        return <AlertCircle className="h-4 w-4 text-destructive" />;
    }
  };

  const getLeaveColor = (type: string) => {
    switch (type) {
      case "Medical":
        return "bg-medical-bg text-medical border-medical";
      case "Personal":
        return "bg-personal-bg text-personal border-personal";
      case "Casual":
        return "bg-casual-bg text-casual border-casual";
      default:
        return "";
    }
  };

  return (
    <DashboardLayout role="student">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Student Dashboard</h1>
          <p className="text-muted-foreground">Track your attendance and manage leave requests</p>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="shadow-card hover:shadow-hover transition-smooth">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Attendance</CardTitle>
              <Calendar className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{attendancePercentage}%</div>
              <Progress value={attendancePercentage} className="mt-2" />
              <p className="text-xs text-muted-foreground mt-2">
                Required: {requiredPercentage}%
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-hover transition-smooth">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Medical Leaves</CardTitle>
              <FileText className="h-4 w-4 text-medical" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2/5</div>
              <p className="text-xs text-muted-foreground mt-2">
                Used / Available
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-hover transition-smooth">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Requests</CardTitle>
              <Clock className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1</div>
              <p className="text-xs text-muted-foreground mt-2">
                Awaiting approval
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Submit a new leave request</CardDescription>
          </CardHeader>
          <CardContent>
            <Dialog open={showLeaveForm} onOpenChange={setShowLeaveForm}>
              <DialogTrigger asChild>
                <Button className="w-full md:w-auto">Request Leave</Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <LeaveRequestForm onClose={() => setShowLeaveForm(false)} />
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        {/* Leave History */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Leave History</CardTitle>
            <CardDescription>Your recent leave requests</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {leaveHistory.map((leave) => (
                <div
                  key={leave.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent transition-smooth"
                >
                  <div className="flex items-center gap-4">
                    {getStatusIcon(leave.status)}
                    <div>
                      <p className="font-medium">{leave.date}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className={getLeaveColor(leave.type)}>
                          {leave.type}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{leave.days} day(s)</span>
                      </div>
                    </div>
                  </div>
                  <Badge
                    variant={
                      leave.status === "Approved"
                        ? "default"
                        : leave.status === "Pending"
                        ? "secondary"
                        : "destructive"
                    }
                  >
                    {leave.status}
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
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="flex items-start gap-3 p-3 border rounded-lg"
                >
                  <div
                    className={`h-2 w-2 mt-2 rounded-full ${
                      notification.type === "success" ? "bg-success" : "bg-warning"
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

export default Student;
