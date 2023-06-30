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
      We connect our prompt to our test cases with curly brackets.
    </Typography>
    <br />
    <Typography variant="body1">
      When you put a variable in{" "}
      <span style={{ fontWeight: "bold" }}>curly brackets</span>, the prompt
      will fill it with the variable value. For example, if you have a prompt
      like this:
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
        Write me a poem about {`{{topic}}`}.
      </Typography>
    </div>
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
              >{`{{topic}}`}</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <Typography>love</Typography>
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
    <Typography variant="h6">Batching test cases</Typography>
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
