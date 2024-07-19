import { Button } from "@mui/material"
import { useQuestionStore } from "../store/questions"
import { LIMIT_QUESTIONS } from "../const"

export const Start = () => {
  const fetchQuestions = useQuestionStore((state) => state.fetchQuestions)
  const handleClick = () => {
    fetchQuestions(LIMIT_QUESTIONS)
  }

  return (
    <Button
      sx={{ marginTop: "16px" }}
      onClick={handleClick}
      variant="contained"
    >
      ¡Empezar Quiz!
    </Button>
  )
}
