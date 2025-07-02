import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  Typography,
  Grid,
  Paper,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import FootballerSVG from "./FootballerSVG";

const initialPlayers = [
  { id: 1, name: "mehmet", avatar: "https://i.pravatar.cc/150?img=1" },
  { id: 2, name: "emre cemal", avatar: "https://i.pravatar.cc/150?img=2" },
  { id: 3, name: "bilal", avatar: "https://i.pravatar.cc/150?img=3" },
  { id: 4, name: "umut", avatar: "https://i.pravatar.cc/150?img=4" },
  { id: 5, name: "emirhan", avatar: "https://i.pravatar.cc/150?img=5" },
  { id: 6, name: "berkay", avatar: "https://i.pravatar.cc/150?img=6" },
  { id: 7, name: "furkan", avatar: "https://i.pravatar.cc/150?img=7" },
  { id: 8, name: "erhan", avatar: "https://i.pravatar.cc/150?img=8" },
  { id: 9, name: "alpsu", avatar: "https://i.pravatar.cc/150?img=9" },
  { id: 10, name: "fatih", avatar: "https://i.pravatar.cc/150?img=10" },
  { id: 11, name: "onur", avatar: "https://i.pravatar.cc/150?img=11" },
  { id: 12, name: "buğra", avatar: "https://i.pravatar.cc/150?img=12" },
  { id: 13, name: "sager", avatar: "https://i.pravatar.cc/150?img=13" },
  { id: 14, name: "resul", avatar: "https://i.pravatar.cc/150?img=14" },
];

const captainStepsLeft = [-300, -250, -200, -150, -100, -50, -20];
const captainStepsRight = [300, 250, 200, 150, 100, 50, 20];

const playerVariants = {
  hidden: { opacity: 0, scale: 0.7, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.7, y: -20 },
};

export default function TeamSelectionStep() {
  const [playersPool, setPlayersPool] = useState([]);
  const [blackTeam, setBlackTeam] = useState([]);
  const [whiteTeam, setWhiteTeam] = useState([]);
  const [captainPos, setCaptainPos] = useState({ black: 0, white: 0 });
  const [turn, setTurn] = useState(null); // "black" veya "white"
  const [animating, setAnimating] = useState(false);
  const [animatingCaptain, setAnimatingCaptain] = useState(null);

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));

  const isGameOver = blackTeam.length === 7 && whiteTeam.length === 7;

  // Kaptanlar: ilk oyuncu takımdan
  const captainBlack = {
    name: blackTeam[0]?.name || "Kaptan Siyah",
    avatar:
      blackTeam[0]?.avatar ||
      "https://cdn-icons-png.flaticon.com/512/4140/4140047.png",
  };
  const captainWhite = {
    name: whiteTeam[0]?.name || "Kaptan Beyaz",
    avatar:
      whiteTeam[0]?.avatar ||
      "https://cdn-icons-png.flaticon.com/512/4140/4140049.png",
  };

  useEffect(() => {
    let poolCopy = [...initialPlayers];

    // Siyah takım kaptanı rastgele
    const randomIndexBlack = Math.floor(Math.random() * poolCopy.length);
    const captainPlayerBlack = poolCopy.splice(randomIndexBlack, 1)[0];

    // Beyaz takım kaptanı rastgele
    const randomIndexWhite = Math.floor(Math.random() * poolCopy.length);
    const captainPlayerWhite = poolCopy.splice(randomIndexWhite, 1)[0];

    setBlackTeam([captainPlayerBlack]);
    setWhiteTeam([captainPlayerWhite]);
    setPlayersPool(poolCopy);

    // İlk turu rastgele atarız
    setTurn(Math.random() < 0.5 ? "black" : "white");
  }, []);

  const selectPlayer = (player) => {
    if (animating || isGameOver) return;

    setAnimating(true);
    setAnimatingCaptain(turn);

    const totalSelected = blackTeam.length + whiteTeam.length;
    let nextStep = captainPos[turn] + 1;

    if (totalSelected + 1 === 14) {
      nextStep = 6;
    }

    const newCaptainPos = { ...captainPos, [turn]: nextStep };

    setTimeout(() => {
      if (turn === "black" && blackTeam.length < 7)
        setBlackTeam((prev) => [...prev, player]);
      if (turn === "white" && whiteTeam.length < 7)
        setWhiteTeam((prev) => [...prev, player]);

      setPlayersPool((prev) => prev.filter((p) => p.id !== player.id));
      setCaptainPos(newCaptainPos);

      if (totalSelected + 1 === 14) {
        setTurn(turn);
      } else {
        setTurn(turn === "black" ? "white" : "black");
      }

      setAnimatingCaptain(null);
      setAnimating(false);
    }, 700);
  };

  return (
    <Box
      sx={{
        p: isXs ? 2 : 3,
        maxWidth: 1400,
        margin: "auto",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: isXs ? 2 : 3,
      }}
    >
      <Typography
        variant={isXs ? "h5" : "h4"}
        textAlign="center"
        gutterBottom
        sx={{ fontWeight: "bold" }}
      >
        7'ye 7 Takım Oluşturma
      </Typography>

      <Typography
        variant={isXs ? "subtitle1" : "h6"}
        textAlign="center"
        gutterBottom
        sx={{
          fontWeight: "bold",
          color: turn === "black" ? "#000" : "#444",
        }}
      >
        {!isGameOver
          ? `Sıra ${turn === "black" ? "Siyah Takım" : "Beyaz Takım"}'da`
          : "Takımlar Tamamlandı! 🎉"}
      </Typography>

      <Box
        sx={{
          position: "relative",
          height: isXs ? 240 : 320,
          background: `linear-gradient(
            to right,
            #f5f5f5 0%,         /* beyaz takımı için açık renk */
            #e0e0e0 50%,        /* orta açık gri */
            #212121 50%,        /* siyah takımı için siyah */
            #424242 100%        /* koyu gri */
          )`,
          borderRadius: 3,
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          gap: isXs ? 2 : 6,
          px: isXs ? 2 : 0,
          py: isXs ? 2 : 0,
        }}
      >
        {/* Siyah Kaptan */}
        <motion.div
          key="captainBlack"
          initial={false}
          animate={{
            x: captainStepsLeft[captainPos.black] || captainStepsLeft[0],
          }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          style={{
            cursor:
              turn === "black" && !animating && !isGameOver
                ? "pointer"
                : "default",
            zIndex: turn === "black" ? 10 : 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border:
              turn === "black" && !isGameOver
                ? "4px solid black"
                : "4px solid transparent",
            borderRadius: 16,
            padding: isXs ? 4 : 8,
            color: "black",
          }}
          whileHover={{
            scale: turn === "black" && !animating && !isGameOver ? 1.1 : 1,
          }}
          whileTap={{ scale: 0.95 }}
        >
          <FootballerSVG
            active={animatingCaptain === "black"}
            direction="left"
            color="white"
          />
          <Typography
            variant={isXs ? "subtitle2" : "subtitle1"}
            textAlign="center"
            sx={{ mt: 1, maxWidth: 110, wordWrap: "break-word" }}
          >
            {captainBlack.name}
          </Typography>
        </motion.div>

        {/* Beyaz Kaptan */}
        <motion.div
          key="captainWhite"
          initial={false}
          animate={{
            x: captainStepsRight[captainPos.white] || captainStepsRight[0],
          }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          style={{
            cursor:
              turn === "white" && !animating && !isGameOver
                ? "pointer"
                : "default",
            zIndex: turn === "white" ? 10 : 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border:
              turn === "white" && !isGameOver
                ? "4px solid white"
                : "4px solid transparent",
            borderRadius: 16,
            padding: isXs ? 4 : 8,
            color: "black",
          }}
          whileHover={{
            scale: turn === "white" && !animating && !isGameOver ? 1.1 : 1,
          }}
          whileTap={{ scale: 0.95 }}
        >
          <FootballerSVG
            active={animatingCaptain === "white"}
            direction="right"
            color="white"
          />
          <Typography
            variant={isXs ? "subtitle2" : "subtitle1"}
            textAlign="center"
            sx={{ mt: 1, maxWidth: 110, wordWrap: "break-word",color:"white" }}
          >
            {captainWhite.name}
          </Typography>
        </motion.div>
      </Box>

      {/* Takımlar ve Havuz */}
      <Grid container spacing={isXs ? 2 : 3}>
        {/* Siyah Takım */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            elevation={4}
            sx={{
              bgcolor: "black",
              borderRadius: 3,
              p: isXs ? 1 : 2,
              minHeight: isXs ? 280 : 400,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              overflowY: "auto",
              color: "white",
            }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              gutterBottom
              sx={{ textAlign: "center" }}
            >
              Siyah Takım
            </Typography>
            <Stack spacing={1} width="100%">
              <AnimatePresence>
                {blackTeam.map((player) => (
                  <motion.div
                    key={player.id}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={playerVariants}
                    layout
                  >
                    <Card
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        p: 1,
                        mb: 1,
                        bgcolor: "#333",
                        color: "white",
                      }}
                      elevation={3}
                    >
                      <img
                        src={player.avatar}
                        alt={player.name}
                        style={{
                          width: isXs ? 32 : 40,
                          height: isXs ? 32 : 40,
                          borderRadius: "50%",
                          marginRight: 12,
                        }}
                      />
                      <Typography variant={isXs ? "body2" : "body1"}>
                        {player.name}
                      </Typography>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </Stack>
          </Paper>
        </Grid>

        {/* Oyuncu Havuzu */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            elevation={4}
            sx={{
              borderRadius: 3,
              p: isXs ? 1 : 2,
              minHeight: isXs ? 280 : 400,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              overflowY: "auto",
            }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              gutterBottom
              sx={{ textAlign: "center" }}
            >
              Oyuncu Havuzu
            </Typography>
            {playersPool.length === 0 ? (
              <Typography
                mt={4}
                color="success.main"
                fontWeight="bold"
                textAlign="center"
              >
                Takımlar tamamlandı! 🎉
              </Typography>
            ) : (
              <Stack
                spacing={1}
                width="100%"
                maxHeight={isXs ? 220 : 300}
                overflow="auto"
              >
                <AnimatePresence>
                  {playersPool.map((player) => (
                    <motion.div
                      key={player.id}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={playerVariants}
                      layout
                    >
                      <Card
                        onClick={() => selectPlayer(player)}
                        sx={{
                          cursor: animating ? "not-allowed" : "pointer",
                          display: "flex",
                          alignItems: "center",
                          p: 1,
                          mb: 1,
                          "&:hover": {
                            bgcolor: "#e3f2fd",
                            boxShadow: 6,
                          },
                        }}
                        elevation={3}
                      >
                        <img
                          src={player.avatar}
                          alt={player.name}
                          style={{
                            width: isXs ? 32 : 40,
                            height: isXs ? 32 : 40,
                            borderRadius: "50%",
                            marginRight: 12,
                          }}
                        />
                        <Typography variant={isXs ? "body2" : "body1"}>
                          {player.name}
                        </Typography>
                      </Card>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </Stack>
            )}
          </Paper>
        </Grid>

        {/* Beyaz Takım */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            elevation={4}
            sx={{
              bgcolor: "white",
              borderRadius: 3,
              p: isXs ? 1 : 2,
              minHeight: isXs ? 280 : 400,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              overflowY: "auto",
              color: "black",
            }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              gutterBottom
              sx={{ textAlign: "center" }}
            >
              Beyaz Takım
            </Typography>
            <Stack spacing={1} width="100%">
              <AnimatePresence>
                {whiteTeam.map((player) => (
                  <motion.div
                    key={player.id}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={playerVariants}
                    layout
                  >
                    <Card
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        p: 1,
                        mb: 1,
                      }}
                      elevation={3}
                    >
                      <img
                        src={player.avatar}
                        alt={player.name}
                        style={{
                          width: isXs ? 32 : 40,
                          height: isXs ? 32 : 40,
                          borderRadius: "50%",
                          marginRight: 12,
                        }}
                      />
                      <Typography variant={isXs ? "body2" : "body1"}>
                        {player.name}
                      </Typography>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
