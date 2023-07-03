import { EditorExample } from "@/Components/EditorExample";
import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";

const PromptVariables = () => {
  const theme = useTheme();
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Prompt Variables
      </Typography>
      <Typography variant="h5">
        We can connect our prompt to variables with curly brackets.
      </Typography>
      <br />
      <Typography variant="body1">
        When you put a variable in{" "}
        <span style={{ fontWeight: "bold" }}>curly brackets</span>, the prompt
        will fill it with the variable value. For example, if you have a prompt
        like this:
      </Typography>
      <br />
      <EditorExample>{`Write me a poem about {{topic}}.`}</EditorExample>
      <br />
      <Typography>then when you run the prompt with the test case</Typography>
      <br />
      <TableContainer component={Card}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography
                  style={{
                    fontFamily: "monospace",
                  }}
                  color={theme.palette.text.secondary}
                >{`{{topic}}`}</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <Typography color={theme.palette.text.secondary}>
                  love
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <Typography>
        the prompt will fill in the variable and run it like this:
      </Typography>
      <br />
      <div
        style={{
          padding: "15px",
          backgroundColor: "#282c34",
          border: "2px solid white",
          borderRadius: "5px",
        }}
      >
        <Typography
          style={{
            fontFamily: "monospace",
          }}
        >
          Write me a poem about love.
        </Typography>
      </div>
      <br />
      <Typography>
        Try it yourself! In the prompt editor, add a prompt that uses a prompt
        variable.
      </Typography>
      <br />
      <Typography>
        Ready to deepen your understanding? Click {`"Next"`} to continue.
      </Typography>
    </>
  );
};

export { PromptVariables };
