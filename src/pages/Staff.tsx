import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ClipboardList, CheckCircle, XCircle, Clock, Users } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { toast } from "sonner";

const Staff = () => {
  const pendingRequests = [
    { id: 1, student: "Alice Johnson", class: "10-A", type: "Medical", days: 3, date: "2024-01-25" },
    { id: 2, student: "Bob Smith", class: "9-B", type: "Personal", days: 1, date: "2024-01-26" },
  ];

  const todayAbsent = [
    { id: 1, student: "Charlie Brown", class: "11-A", reason: "Medical", informed: true },
    { id: 2, student: "David Wilson", class: "10-B", reason: "Unknown", informed: false },
  ];

  const weekSummary = {
    totalAbsences: 45,
    medical: 18,
    personal: 12,
    casual: 8,
    uninformed: 7,
  };

  const handleApprove = (studentName: string) => {
    toast.success(`Approved leave request for ${studentName}`);
  };

  const handleReject = (studentName: string) => {
    toast.error(`Rejected leave request for ${studentName}`);
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
    <DashboardLayout role="staff">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Staff Dashboard</h1>
          <p className="text-muted-foreground">Manage attendance and approve leave requests</p>
        </div>

        {/* Summary Cards */}
        <div className="grid gap-6 md:grid-cols-4">
          <Card className="shadow-card hover:shadow-hover transition-smooth">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Absences</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{weekSummary.totalAbsences}</div>
              <p className="text-xs text-muted-foreground">This week</p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-hover transition-smooth">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Medical</CardTitle>
              <div className="h-3 w-3 rounded-full bg-medical" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{weekSummary.medical}</div>
              <p className="text-xs text-muted-foreground">Leaves this week</p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-hover transition-smooth">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Personal</CardTitle>
              <div className="h-3 w-3 rounded-full bg-personal" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{weekSummary.personal}</div>
              <p className="text-xs text-muted-foreground">Leaves this week</p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-hover transition-smooth">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Uninformed</CardTitle>
              <div className="h-3 w-3 rounded-full bg-destructive" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{weekSummary.uninformed}</div>
              <p className="text-xs text-muted-foreground">Absences this week</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="pending" className="space-y-6">
          <TabsList>
            <TabsTrigger value="pending">Pending Requests</TabsTrigger>
            <TabsTrigger value="absent">Today's Absences</TabsTrigger>
          </TabsList>

          <TabsContent value="pending" className="space-y-4">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Pending Leave Requests
                </CardTitle>
                <CardDescription>Review and approve student leave requests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingRequests.map((request) => (
                    <div
                      key={request.id}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <p className="font-medium">{request.student}</p>
                          <Badge variant="outline">{request.class}</Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className={getLeaveColor(request.type)}>
                            {request.type}
                          </Badge>
                          <span className="text-sm text-muted-foreground">
                            {request.days} day(s) - {request.date}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="default"
                          onClick={() => handleApprove(request.student)}
                        >
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Approve
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleReject(request.student)}
                        >
                          <XCircle className="h-4 w-4 mr-1" />
                          Reject
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="absent" className="space-y-4">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ClipboardList className="h-5 w-5" />
                  Today's Absences
                </CardTitle>
                <CardDescription>Students absent today</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {todayAbsent.map((student) => (
                    <div
                      key={student.id}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <p className="font-medium">{student.student}</p>
                          <Badge variant="outline">{student.class}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Reason: {student.reason}</p>
                      </div>
                      <Badge variant={student.informed ? "default" : "destructive"}>
                        {student.informed ? "Informed" : "Uninformed"}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Staff;
