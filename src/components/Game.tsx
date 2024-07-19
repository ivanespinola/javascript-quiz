import { IconButton, Stack } from "@mui/material"
import { useQuestionStore } from "../store/questions"
import { Question } from "./Questions"
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material"
import { Footer } from "./Footer"
import { motion, AnimatePresence } from "framer-motion"

export const Game = () => {
  const questions = useQuestionStore((state) => state.questions)
  const currentQuestion = useQuestionStore((state) => state.currentQuestion)
  const goNextQuestion = useQuestionStore((state) => state.goNextQuestion)
  const goPreviousQuestion = useQuestionStore(
    (state) => state.goPreviousQuestion,
  )
  const questionInfo = questions[currentQuestion]

  return (
    <>
      <Stack
        direction="row"
        gap={2}
        alignItems="center"
        justifyContent="center"
        marginTop="25px"
      >
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <IconButton
            onClick={goPreviousQuestion}
            disabled={currentQuestion === 0}
          >
            <ArrowBackIosNew />
          </IconButton>
        </motion.div>
        {currentQuestion + 1} / {questions.length}
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <IconButton
            onClick={goNextQuestion}
            disabled={currentQuestion >= questions.length - 1}
          >
            <ArrowForwardIos />
          </IconButton>
        </motion.div>
      </Stack>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
        >
          <Question info={questionInfo} />
        </motion.div>
      </AnimatePresence>

      <Footer />
    </>
  )
}
