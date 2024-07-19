import { Button } from "@mui/material"
import { useQuestionData } from "../hooks/useQuestionsData"
import { useQuestionStore } from "../store/questions"

export const Footer = () => {
  const { correct, incorrect, unanswered } = useQuestionData()
  const reset = useQuestionStore((state) => state.reset)

  const handleClick = () => {
    reset()
  }

  return (
    <footer style={{ marginTop: "30px" }}>
      <strong>{`✅ ${correct} correctas - ❌ ${incorrect} incorrectas - ❓ ${unanswered} sin responder`}</strong>
      <div style={{ marginTop: "16px" }}>
        <Button onClick={handleClick}>Reset Quiz</Button>
      </div>
    </footer>
  )
}
