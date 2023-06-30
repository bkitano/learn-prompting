import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const RunningTestCases = () => (
  <>
    <Typography variant="h4" gutterBottom>
      Running Test Cases
    </Typography>
    <Typography variant="h5">
      We can run all the test cases at the same time using prompt variables.
    </Typography>
    <br />
    <Typography>
      We can use brackets to run our prompt on multiple test cases, all in one
      go! For example, if we have a set of test cases like this:
    </Typography>
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
              >{`{{topic}}`}</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <Typography>song</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography>dance</Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    <br />
    <Typography>
      then the prompt will run on both test cases, like this:
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
        Write me a poem about song.
      </Typography>
    </div>
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
        Write me a poem about dance.
      </Typography>
    </div>
    <br />
    <Typography>
      Try it yourself. In the Prompt Editor, add a variable called "action"
      within curly brackets and hit "Run". This will execute the prompt on our
      set of compliance test cases.
    </Typography>
    <br />
    <Typography>
      Ready to deepen your understanding? Click "Next" to continue.
    </Typography>
  </>
);

export { RunningTestCases };
