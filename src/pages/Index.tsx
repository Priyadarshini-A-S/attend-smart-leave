import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar, Bell, Shield, CheckCircle, Clock, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Calendar,
      title: "Attendance Tracking",
      description: "Real-time attendance monitoring with ERP-like precision",
      color: "text-primary",
    },
    {
      icon: CheckCircle,
      title: "Smart Leave Management",
      description: "Automated approval system with priority-based processing",
      color: "text-success",
    },
    {
      icon: Bell,
      title: "Instant Notifications",
      description: "SMS and email alerts for parents and students",
      color: "text-warning",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Role-based access control for all users",
      color: "text-medical",
    },
    {
      icon: Clock,
      title: "Real-time Updates",
      description: "Live dashboards with attendance summaries",
      color: "text-personal",
    },
    {
      icon: Users,
      title: "Multi-Role Support",
      description: "Separate dashboards for students, parents, and staff",
      color: "text-casual",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mx-auto bg-white/10 backdrop-blur-sm rounded-full p-4 w-fit mb-6">
            <GraduationCap className="h-16 w-16 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Student Leave Management System
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Streamline attendance tracking, manage leave requests, and keep everyone informed with our comprehensive SLMS platform
          </p>
          <Button
            size="lg"
            onClick={() => navigate("/auth")}
            className="bg-white text-primary hover:bg-white/90 shadow-hover"
          >
            Get Started
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-muted-foreground text-lg">
              Everything you need to manage student attendance and leaves effectively
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="shadow-card hover:shadow-hover transition-smooth border-2"
              >
                <CardHeader>
                  <feature.icon className={`h-10 w-10 ${feature.color} mb-2`} />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-accent">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground text-lg">Simple and efficient workflow</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-primary text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose Your Role</h3>
              <p className="text-muted-foreground">
                Login as a student, parent, staff member, or admin
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-primary text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Access Your Dashboard</h3>
              <p className="text-muted-foreground">
                View attendance, submit requests, or manage approvals
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-primary text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Stay Informed</h3>
              <p className="text-muted-foreground">
                Receive real-time notifications and updates
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of educational institutions using SLMS for efficient attendance management
          </p>
          <Button
            size="lg"
            onClick={() => navigate("/auth")}
            className="bg-white text-primary hover:bg-white/90 shadow-hover"
          >
            Login / Register
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 SLMS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
