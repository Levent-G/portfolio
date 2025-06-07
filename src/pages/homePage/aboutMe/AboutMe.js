import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import header1 from "../../../assets/img/header1.jpg";
import CustomTypography from "../../../components/typography/CustomTypography";
import CustomButton from "../../../components/button/CustomButton";
import { useTheme } from "../../../context/ThemeContext";
import { doc, getDoc } from "firebase/firestore";
import { adminDb } from "../../../firebase/firebase";
import CustomPaper from "../../../components/paper/CustomPaper";

const AboutMe = () => {
  const { theme } = useTheme();
  const [data, setData] = useState({
    title: "Loading...",
    description: "Loading...",
    title2: "Loading...",
    address: "",
    age: "",
    email: "",
    phone: "",
    name: "",
  });

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const infoDocRef = doc(adminDb, "pages", "portfolio", "fields", "info");
        const infoSnap = await getDoc(infoDocRef);
        if (infoSnap.exists()) {
          const d = infoSnap.data();
          setData({
            title: d.title || "No Title",
            description: d.description || "No Description",
            title2: d.title2 || "No Title2",
            address: d.address || "",
            age: d.age || "",
            email: d.email || "",
            phone: d.phone || "",
            name: d.name || "",
          });
        } else {
          setData({
            title: "No Title",
            description: "No Description",
            title2: "No Title2",
            address: "",
            age: "",
            email: "",
            phone: "",
            name: "",
          });
        }
      } catch (error) {
        console.error("Error fetching info:", error);
        setData({
          title: "Error",
          description: "Error",
          title2: "Error",
          address: "",
          age: "",
          email: "",
          phone: "",
          name: "",
        });
      }
    };

    fetchInfo();
  }, []);

  const listItem = [
    { label: "Name", value: data.name },
    { label: "Age", value: data.age },
    { label: "Address", value: data.address },
    { label: "Email", value: data.email },
    { label: "Phone", value: data.phone },
  ];

  const bgGradient = "linear-gradient(135deg, #f0f4f8 0%, #d9e2ec 100%)";

  return (
    <CustomPaper
      style={{
        background: bgGradient,
        padding: "3rem 6%",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <Grid
        container
        spacing={5}
        alignItems="center"
        justifyContent="space-between"
      >
        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <CustomTypography
            variant="h5" // h4'ten h5'e küçültüldü
            text={data.title}
            sx={{
              color: theme.primaryColor || "#102a43",
              fontWeight: 600,
              mb: 1.5,
              fontSize: "1.5rem", // ekstra küçültme
              letterSpacing: "0.5px",
            }}
          />
          <CustomTypography
            variant="body2"
            text={data.description}
            sx={{
              color: theme.secondaryTextColor || "#334e68",
              lineHeight: 1.4,
              mb: 3,
              fontSize: "0.875rem",
            }}
          />
          <CustomTypography
            variant="subtitle1" // h6'dan subtitle1'e küçültüldü
            text={data.title2}
            sx={{
              color: theme.primaryColor || "#102a43",
              fontWeight: 500,
              mb: 2,
              fontSize: "1.1rem",
            }}
          />
          <div>
            {listItem.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "8px 0",
                  borderBottom: `1px solid ${theme.primaryColor}33`,
                }}
              >
                <span
                  style={{
                    color: theme.primaryColor || "#102a43",
                    fontWeight: 500,
                    fontSize: "0.85rem",
                  }}
                >
                  {item.label}
                </span>
                <span
                  style={{
                    color: theme.secondaryTextColor || "#334e68",
                    fontSize: "0.85rem",
                  }}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>
          <CustomButton
            linkTo="/pdf"
            text="Show CV"
            sx={{
              marginTop: "2.5rem",
              padding: "12px 32px",
              fontWeight: 600,
              borderRadius: "30px",
              backgroundColor: theme.primaryColor || "#102a43",
              color: "#fff",
              boxShadow: "0 4px 12px rgb(16 42 67 / 0.25)",
              transition: "background-color 0.3s ease",
              "&:hover": {
                backgroundColor: theme.accentColor || "#243b53",
              },
              display: "inline-block",
              fontSize: "0.9rem",
            }}
          />
        </Grid>

        <Grid item xs={12} md={5} sx={{ textAlign: "center" }}>
          <img
            src={header1}
            alt="About Me"
            style={{
              width: "100%",
              maxWidth: 400,
              maxHeight: 400,
              borderRadius: 24,
              border: `4px solid ${theme.primaryColor}33`, // hafif şeffaf çerçeve
              boxShadow: `0 8px 24px rgba(0,0,0,0.12)`, // yumuşak gölge
              objectFit: "cover",
              transition: "transform 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </Grid>
      </Grid>
    </CustomPaper>
  );
};

export default AboutMe;
