import { useQuestionData } from "../hooks/useQuestionsData"
import { useQuestionStore } from "../store/questions"
import { Typography, Button } from "@mui/material"
import { motion, AnimatePresence } from "framer-motion"

export const Results = () => {
  const questions = useQuestionStore((state) => state.questions)
  const reset = useQuestionStore((state) => state.reset)
  const { correct, incorrect } = useQuestionData()

  const correctPercentage = () => {
    return ((correct / questions.length) * 100).toFixed(2)
  }
  const handleClick = () => {
    reset()
  }

  return (
    <div style={{ marginTop: "30px" }}>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h2" sx={{ fontWeight: "bold" }}>
            Resultados
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            <p>✅ {correct} correctas</p>
            <p>❌ {incorrect} incorrectas</p>
          </Typography>
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", marginTop: "30px" }}
          >
            Has conseguido un{" "}
            <span style={{ color: "#27AE60" }}>{correctPercentage()}%</span> de
            aciertos
          </Typography>
        </motion.div>
      </AnimatePresence>
      <div style={{ marginTop: "26px" }}>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <Button onClick={handleClick}>Empezar de nuevo</Button>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
