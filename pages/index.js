
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-6 md:p-12 font-sans">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Anurag Vishal</h1>
        <p className="text-lg text-gray-600 mb-6">
          Data Analytics & Engineering professional with a strong foundation in data pipeline development, business intelligence, and dashboard design. Proficient in SQL, Power BI, and Python, I specialize in turning raw data into actionable insights, automating workflows, and driving data-informed decision-making. With a proven track record in developing impactful dashboards, solving business challenges, and communicating results to stakeholders, I bring both analytical depth and executional clarity.
        </p>
        <div className="flex gap-4 mb-12">
          <a
            href="https://www.linkedin.com/in/anurag-vishal-9a1014248/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="flex items-center gap-2">
              <Linkedin size={16} /> LinkedIn
            </Button>
          </a>
          <a
            href="https://github.com/Anurag9Vishal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="flex items-center gap-2">
              <Github size={16} /> GitHub
            </Button>
          </a>
        </div>

        {/* Projects Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Highlighted Projects</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2">1. Hospitality Revenue Insights</h3>
                <p className="text-sm text-gray-600">
                  Built a Power BI-based end-to-end reporting system analyzing hotel booking trends, room occupancy, guest behavior, and revenue flow using multi-source data. Integrated multiple dimension tables and applied advanced DAX to extract actionable KPIs. Used filters for date ranges, hotel categories, and booking platforms, providing hotel managers with decision-ready dashboards.
                </p>
                <a href="https://github.com/Anurag9Vishal/Hospitality-Revenue-Insights" className="text-blue-600 text-sm mt-2 inline-block" target="_blank">View on GitHub</a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2">2. HR Data Analytics using Power BI & SQL</h3>
                <p className="text-sm text-gray-600">
                  Designed a full-stack HR analytics solution analyzing 849+ attendance logs and 139 WFH records. Transformed raw HR data using SQL, automated KPIs like leave trends and present days, and visualized patterns with Power BI. Streamlined leave monitoring and reduced payroll processing errors by enhancing data accuracy and visualization.
                </p>
                <a href="https://github.com/Anurag9Vishal/HR-Data-Analytics" className="text-blue-600 text-sm mt-2 inline-block" target="_blank">View on GitHub</a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2">3. Loan Eligibility Prediction</h3>
                <p className="text-sm text-gray-600">
                  Developed a machine learning-based classification pipeline to predict loan approval outcomes. Engineered features from raw demographic and financial data, handled missing values, applied logistic regression and decision tree models, and achieved 80% accuracy. Conducted EDA and model interpretability to highlight key predictors like Credit History and Income.
                </p>
                <a href="https://github.com/Anurag9Vishal/Loan-Eligibility-Prediction" className="text-blue-600 text-sm mt-2 inline-block" target="_blank">View on GitHub</a>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Skills & Tools</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-700">
            <li>SQL (Joins, CTEs, Window Functions)</li>
            <li>Power BI (DAX, Filters, Visuals)</li>
            <li>Python (pandas, seaborn, matplotlib)</li>
            <li>Scikit-learn & ML Modeling</li>
            <li>Data Cleaning & Preprocessing</li>
            <li>Dashboard Design & Reporting</li>
            <li>ETL Automation & Data Pipelines</li>
            <li>Excel (Power Query, Pivot Tables)</li>
            <li>Git & GitHub (Version Control)</li>
            <li>Business Analytics & Storytelling</li>
            <li>RFM & Cohort Analysis</li>
            <li>Cross-functional Communication</li>
          </ul>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-2">
            I’m actively seeking full-time opportunities in Data Analytics, BI Engineering, or Data Engineering roles. Let’s connect!
          </p>
          <p className="font-semibold">Email: vishalanurag@alumni.iitgn.ac.in</p>
          <p className="font-semibold">Phone: +91-7738957332</p>
        </section>
      </section>
    </main>
  );
}