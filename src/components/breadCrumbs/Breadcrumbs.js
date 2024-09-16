import MuiBreadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Typography } from "@gib-ui/core";
import { useTheme } from "../../context/ThemeContext";


const Breadcrumbs = ({ links }) => {
    const { theme } = useTheme();
    return (
        <MuiBreadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
            sx={({ breakpoints }) => ({
                fontWeight: 600,
                fontSize: "1rem",
                color: theme.primaryColor,
                marginTop: "90px",
                [breakpoints.down("xl")]: {
                    marginTop: "90px"
                }
            })}
        >
            <Link
                key={"-1"}
                href={"/"}
                component="a"
                color={"#707070"}
                sx={{
                    "&:hover, &:focus": {
                        color: "#707070"
                    }
                }}
            >
                {"Home Page"}
            </Link>
            {links.map((link, index) =>
                link.href ? (
                    <Link
                    key={index}
                    href={link.href}
                    component="a"
                    color="#707070"
                    sx={{
                        
                        "&:hover, &:focus": {
                            color: "#707070",
                        }
                    }}
                    >
                        {link.label}
                    </Link>
                ) : (
                    <Typography
                        key={index}
                        sx={{
                            "&:hover, &:focus": {
                                color: theme.primaryColor || "inherit"
                            },
                            fontWeight: 600,
                            fontSize: "1rem",
                            color: theme.primaryColor,
                        }}
                    >
                        {link.label}
                    </Typography>
                )
            )}
        </MuiBreadcrumbs>
    );
};

export default Breadcrumbs;
