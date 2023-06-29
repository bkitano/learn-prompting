import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { testCases as defaultTestCases } from "@/resources/testCases";
import { Collapse, IconButton, Typography } from "@mui/material";

type TestCase = {
  description: string;
  correctAnswer: boolean;
  promptAnswer?: boolean;
  explanation?: string;
};

const TestCases = () => {
  const [testCases, setTestCases] = useState<TestCase[]>(defaultTestCases);
  return (
    <TestCasesView
      {...{
        testCases,
      }}
    />
  );
};

const TestCaseAnswer = (props: { answer?: boolean; correct?: boolean }) => {
  if (props.answer === undefined) {
    return null;
  }
  if (props.correct !== undefined) {
    return props.correct ? (
      <span style={{ color: "green" }}>{String(props.answer)}</span>
    ) : (
      <span style={{ color: "red" }}>{String(props.answer)}</span>
    );
  } else {
    return <span>{String(props.answer)}</span>;
  }
};

const TestCaseRow = (props: { testCase: TestCase }) => {
  const { testCase } = props;
  const [open, setOpen] = useState(false);
  return (
    <>
      <TableRow
        key={testCase.description}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {testCase.description}
        </TableCell>
        <TableCell align="center">
          <TestCaseAnswer {...{ answer: testCase.correctAnswer }} />
        </TableCell>
        <TableCell align="center">{testCase.promptAnswer}</TableCell>
      </TableRow>
      <TableRow>
        <Collapse>{testCase.explanation}</Collapse>
      </TableRow>
    </>
  );
};

const TestCasesView = (props: { testCases: TestCase[] }) => {
  const { testCases } = props;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>
              <Typography variant="h6">Description</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="h6">Correct Answer</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="h6">Prompt Answer</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {testCases.map((testCase) => (
            <TestCaseRow {...{ testCase }} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export { TestCases };
