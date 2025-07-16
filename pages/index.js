import React from "react";

export default function Portfolio() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", backgroundColor: "#f8fafc", color: "#1f2937", lineHeight: "1.6" }}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap');
          a.button {
            display: inline-block;
            padding: 10px 24px;
            margin-right: 12px;
            margin-bottom: 12px;
            text-decoration: none;
            border-radius: 8px;
            font-weight: 500;
            transition: all 0.3s ease;
          }
          a.button-primary {
            background-color: #1d4ed8;
            color: white;
          }
          a.button-primary:hover {
            background-color: #1e40af;
            transform: translateY(-2px);
          }
          a.button-outline {
            border: 2px solid #3b82f6;
            color: #3b82f6;
          }
          a.button-outline:hover {
            background-color: #3b82f6;
            color: white;
            transform: translateY(-2px);
          }
          .glass {
            background: white;
            border-radius: 12px;
            padding: 2rem;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
          }
          .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
          }
        `}
      </style>

      <section style={{ padding: "4rem 1rem", textAlign: "center" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "700", marginBottom: "0.5rem", color: "#1d4ed8" }}>Anurag Vishal</h1>
        <p style={{ maxWidth: "700px", margin: "auto", fontSize: "1.2rem", fontWeight: "300" }}>
          Data Analytics & Engineering professional transforming raw data into impactful solutions.
          Proficient in SQL, Power BI, Python & machine learning for business outcomes.
        </p>
        <div style={{ marginTop: "2rem" }}>
          <a href="https://www.linkedin.com/in/anurag-vishal-9a1014248/" className="button button-outline" target="_blank">LinkedIn</a>
          <a href="https://github.com/Anurag9Vishal" className="button button-outline" target="_blank">GitHub</a>
          <a href="/Resume" download className="button button-primary">Download Résumé</a>
        </div>
      </section>

      <section className="glass section">
        <h2 style={{ fontSize: "1.8rem", fontWeight: "600", color: "#1d4ed8" }}>Work Experience</h2>
        <div style={{ marginTop: "1.5rem" }}>
          <div style={{ backgroundColor: "#ffffff", borderRadius: "8px", padding: "1.5rem", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
            <h3 style={{ fontWeight: "600", color: "#0f172a" }}>University of Miami</h3>
            <p style={{ fontSize: "0.95rem", color: "#475569" }}><em>Research Intern – May • Miami, Florida</em></p>
            <ul style={{ marginTop: "0.75rem", paddingLeft: "1.2rem", fontSize: "0.95rem" }}>
              <li>Performed advanced data analysis on high-temperature ceramic matrix composites (CMCs), evaluating mechanical properties under load.</li>
              <li>Developed ML-based predictive models for extreme thermal and oxidative environments.</li>
              <li>Refined data-driven material design to enhance durability for aerospace applications.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="glass section">
        <h2 style={{ fontSize: "1.8rem", fontWeight: "600", color: "#1d4ed8" }}>Highlighted Projects</h2>
        <div className="grid" style={{ marginTop: "1.5rem" }}>
          <div>
            <h3 style={{ fontWeight: "600", color: "#0f172a" }}>Hospitality Revenue Insights</h3>
            <p>Power BI dashboards for hotel booking trends, room occupancy, and KPIs.</p>
            <a href="https://github.com/Anurag9Vishal/Hospitality-Revenue-Insights" className="button button-primary" target="_blank">View Project</a>
          </div>
          <div>
            <h3 style={{ fontWeight: "600", color: "#0f172a" }}>HR Analytics using Power BI & SQL</h3>
            <p>Automated KPI tracking and workforce visualization to improve payroll accuracy.</p>
            <a href="https://github.com/Anurag9Vishal/HR-Data-Analytics" className="button button-primary" target="_blank">View Project</a>
          </div>
          <div>
            <h3 style={{ fontWeight: "600", color: "#0f172a" }}>Loan Eligibility Prediction</h3>
            <p>ML models predicting loan approvals with 80% accuracy using financial indicators.</p>
            <a href="https://github.com/Anurag9Vishal/Loan-Eligibility-Prediction" className="button button-primary" target="_blank">View Project</a>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 style={{ fontSize: "1.8rem", fontWeight: "600", color: "#1d4ed8" }}>Skills & Tools</h2>
        <ul style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", listStyle: "none", marginTop: "1rem", padding: 0 }}>
          {["SQL", "Power BI", "Python", "Seaborn", "Matplotlib", "Sklearn", "Git", "GitHub", "ETL Automation", "Storytelling", "Excel", "RFM Analysis"].map(skill => (
            <li key={skill} style={{ background: "#e0f2fe", color: "#1d4ed8", padding: "0.4rem 0.75rem", borderRadius: "8px", fontSize: "0.9rem" }}>{skill}</li>
          ))}
        </ul>
      </section>

      <footer style={{ padding: "3rem 1rem", textAlign: "center", backgroundColor: "#e2e8f0", marginTop: "4rem" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "500", color: "#1d4ed8" }}>Get in Touch</h2>
        <p>Email: <strong style={{ color: "#0f172a" }}>vishalanurag@alumni.iitgn.ac.in</strong></p>
        <p>Phone: <strong style={{ color: "#0f172a" }}>+91-7738957332</strong></p>
        <p style={{ marginTop: "1rem", fontSize: "0.85rem", color: "#64748b" }}>© {new Date().getFullYear()} Anurag Vishal. All rights reserved.</p>
      </footer>
    </div>
  );
}
