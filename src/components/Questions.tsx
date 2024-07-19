import {
  Card,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material"
import { Question as QuestionType } from "../types"
import SyntaxHighlighter from "react-syntax-highlighter"
import {
  atomOneDark,
  atomOneLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs"
import { useQuestionStore } from "../store/questions"
import { useTheme } from "@mui/material/styles"
import "../fonts/CascadiaCodeFont.css"

interface Props {
  info: QuestionType
}

export const Question: React.FC<Props> = ({ info }) => {
  const selectAnswer = useQuestionStore((state) => state.selectAnswer)
  const questions = useQuestionStore((state) => state.questions)
  const goNextQuestion = useQuestionStore((state) => state.goNextQuestion)
  const currentQuestion = useQuestionStore((state) => state.currentQuestion)

  const handleClick = (answerIndex: number) => () => {
    selectAnswer(info.id, answerIndex)
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        goNextQuestion()
      }, 600)
    }
  }
  const getBackgroundColor = (index: number) => {
    const { userSelectedAnswer, correctAnswer } = info
    if (userSelectedAnswer == null) return "transparent"
    if (index === correctAnswer) return "green"
    if (index === userSelectedAnswer) return "red"
    return "transparent"
  }
  const theme = useTheme()

  return (
    <>
      <Card
        variant="outlined"
        sx={{
          bgcolor: theme.palette.background.paper,
          p: 2,
          textAlign: "left",
          marginTop: 4.5,
        }}
      >
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          {info.question}
        </Typography>
        <SyntaxHighlighter
          language="javascript"
          style={theme.palette.mode === "dark" ? atomOneDark : atomOneLight}
          codeTagProps={{ style: { fontFamily: "Cascadia Code, monospace" } }}
        >
          {info.code}
        </SyntaxHighlighter>
        <List sx={{ bgcolor: theme.palette.background.default }} disablePadding>
          {info.answers.map((answer, index) => (
            <ListItem key={index} disablePadding divider>
              <ListItemButton
                onClick={handleClick(index)}
                disabled={info.userSelectedAnswer != null}
                sx={{ backgroundColor: getBackgroundColor(index) }}
              >
                <ListItemText
                  primary={answer}
                  primaryTypographyProps={{
                    sx: {
                      textAlign: "center",
                      fontFamily: "Cascadia Code, monospace",
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Card>
    </>
  )
}
