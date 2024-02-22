import jsPDF from "jspdf";

function App() {
  const handleSavePdf = () => {
    const pdf = new jsPDF("p", "pt", "letter");

    // Create pages with a table of contents.
    // TOC links to each page
    // Each page links back to TOC and to an external URL
    // Supported magnification Options are included.
    let y = 20;
    let text = "Table of Contents";
    pdf.text(text, 20, y);
    y += pdf.getLineHeight() * 2;

    for (let i = 2; i < 10; i++) {
      text = "Page " + i;
      pdf.textWithLink(text, 20, y, { pageNumber: i });
      y += pdf.getLineHeight();

      let x = 20;
      let width = null;
      width = pdf.textWithLink(" [100%]", x, y, {
        pageNumber: i,
        magFactor: "XYZ",
        zoom: 1,
      });
      x += width;
      width = pdf.textWithLink(" [200%]", x, y, {
        pageNumber: i,
        magFactor: "XYZ",
        zoom: 2,
      });
      x += width;
      width = pdf.textWithLink(" [50%]", x, y, {
        pageNumber: i,
        magFactor: "XYZ",
        zoom: 0.5,
      });
      x += width;
      width = pdf.textWithLink(" [Fit]", x, y, {
        pageNumber: i,
        magFactor: "Fit",
      });
      x += width;
      width = pdf.textWithLink(" [FitH]", x, y, {
        pageNumber: i,
        magFactor: "FitH",
      });
      x += width;
      width = pdf.textWithLink(" [FitV]", x, y, {
        pageNumber: i,
        magFactor: "FitV",
      });

      y += pdf.getLineHeight();
    }

    // Create Test Pages
    for (let i = 2; i < 10; i++) {
      pdf.addPage();
      y = 20;
      let text = "Page " + i;
      pdf.text(text, 20, y);
      y += pdf.getLineHeight() * 2;

      text = "Goto First Page";
      pdf.textWithLink(text, 20, y, { pageNumber: 1 });
      y += pdf.getLineHeight();

      y += pdf.getLineHeight();
    }

    pdf.save("redirect_page_example.pdf");
  };
  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
          }}
        >
          <p style={{ fontWeight: 600, fontSize: "40px" }}>
            JSPDF React Annotation Example
          </p>
          <button
            onClick={() => {
              handleSavePdf();
            }}
            style={{
              backgroundColor: "blue",
              color: "white",
              border: "none",
              borderRadius: "5px",
              padding: "10px",
              cursor: "pointer",
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            Save Pdf
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
