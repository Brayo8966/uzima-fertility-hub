import { useEffect, useState } from "react";

export default function JoinUs() {
  const [isOpen, setIsOpen] = useState(true);
  const [statusMessage, setStatusMessage] = useState("");
  const [closedMessage, setClosedMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const openDate = new Date("2026-05-10T08:00:00");
    const closeDate = new Date("2026-06-30T23:59:59");
    const now = new Date();

    if (now < openDate) {
      setIsOpen(false);
      setClosedMessage("Applications are not yet open. Please check back later.");
      setStatusMessage("Applications opening soon.");
    } else if (now > closeDate) {
      setIsOpen(false);
      setClosedMessage("Applications are now closed.");
      setStatusMessage("Application period has ended.");
    } else {
      setIsOpen(true);
      setStatusMessage("Applications are currently open.");
    }
  }, []);

  const MAX_FILE_SIZE = 10 * 1024 * 1024;

  const validateFiles = (files) => {
    for (let file of files) {
      if (file.size > MAX_FILE_SIZE) {
        setErrorMessage(`${file.name} exceeds the 10MB limit.`);
        return false;
      }
    }
    setErrorMessage("");
    return true;
  };

  const handleSubmit = (e) => {
    const cvFiles = document.getElementById("cv").files;
    const docFiles = document.getElementById("documents").files;

    const cvValid = validateFiles(cvFiles);
    const docsValid = validateFiles(docFiles);

    if (!cvValid || !docsValid) {
      e.preventDefault();
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "14px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    fontSize: "15px",
  };

  return (
    <div style={{ padding: "40px 20px", background: "#f5f7fa", minHeight: "100vh" }}>
      <div style={{ maxWidth: "700px", margin: "auto", background: "#fff", padding: "35px", borderRadius: "14px" }}>

        <h1 style={{ color: "#0f766e" }}>Application Form</h1>

        <p>Please complete the form below and upload your supporting documents.</p>

        <p style={{ fontWeight: "600", color: "#0f766e" }}>
          {statusMessage}
        </p>

        {!isOpen && (
          <div style={{ color: "red", fontWeight: "bold", fontSize: "18px" }}>
            {closedMessage}
          </div>
        )}

        {isOpen && (
          <form
            action="https://formsubmit.co/uzimafertility@gmail.com"
            method="POST"
            encType="multipart/form-data"
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "18px" }}
          >

            <input type="text" name="Full Name" placeholder="Full Name" required style={inputStyle} />

            <input type="email" name="Email" placeholder="Email" required style={inputStyle} />

            <input type="tel" name="Phone Number" placeholder="Phone Number" required style={inputStyle} />

            <textarea
              name="Brief Self Description"
              placeholder="Tell us about yourself..."
              required
              style={{ ...inputStyle, minHeight: "120px" }}
            />

            <div>
              <label>Upload CV</label>
              <input type="file" id="cv" name="CV" accept=".pdf,.doc,.docx" required />
            </div>

            <div>
              <label>Other Documents</label>
              <input type="file" id="documents" name="Other Documents" multiple />
            </div>

            <input type="hidden" name="_subject" value="New Application Submission" />
            <input type="hidden" name="_captcha" value="false" />

            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

            <button
              type="submit"
              style={{
                background: "#0f766e",
                color: "white",
                padding: "15px",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Submit Application
            </button>

          </form>
        )}
      </div>
    </div>
  );
}
