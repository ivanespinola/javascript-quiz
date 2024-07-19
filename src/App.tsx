import { useState } from "react"
import {
  Container,
  Stack,
  Typography,
  IconButton,
  CssBaseline,
} from "@mui/material"
import { Brightness4, Brightness7 } from "@mui/icons-material"
import { ThemeProvider } from "@mui/material/styles"
import { lightTheme, darkTheme } from "./theme/theme"
import "./App.css"
import { JavaScriptLogo } from "./components/JavaScriptLogo"
import { Start } from "./components/Start"
import { useQuestionStore } from "./store/questions"
import { Game } from "./components/Game"
import { useQuestionData } from "./hooks/useQuestionsData"
import { Results } from "./components/Results"

const App: React.FC = () => {
  const questions = useQuestionStore((state) => state.questions)
  const { unanswered } = useQuestionData()
  const [darkMode, setDarkMode] = useState(true)
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode)
  }

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <main>
        <Container maxWidth="sm">
          <Stack
            direction="row"
            gap={2}
            alignItems="center"
            justifyContent="center"
          >
            <IconButton
              onClick={toggleDarkMode}
              sx={{
                position: "absolute",
                display: "flex",
                justifyContent: "center",
                top: "37px",
              }}
            >
              {darkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
            <JavaScriptLogo />
            <Typography variant="h2" component="h1">
              JavaScript Quiz
            </Typography>
          </Stack>
          {questions.length === 0 && <Start />}
          {questions.length > 0 && unanswered > 0 && <Game />}
          {questions.length > 0 && unanswered === 0 && <Results />}
        </Container>
      </main>
    </ThemeProvider>
  )
}

export default App
