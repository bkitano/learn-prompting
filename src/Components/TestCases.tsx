"use client";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import { TestCase, testCases as defaultTestCases } from "@/resources/testCases";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Collapse,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

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
        key={testCase.case}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell
          component="th"
          scope="row"
          style={{
            maxHeight: "5px",
            overflow: "hidden",
          }}
        >
          {testCase.case}
        </TableCell>
        <TableCell align="center">
          <TestCaseAnswer {...{ answer: testCase.correctAnswer }} />
        </TableCell>
        <TableCell align="center">{testCase.promptAnswer}</TableCell>
      </TableRow>
    </>
  );
};

const TestCases = (props: {
  showRunButton?: boolean;
  open?: boolean;
  runButtonDisabled?: boolean;
}) => {
  const { showRunButton, open, runButtonDisabled } = props;
  const [testCases, setTestCases] = useState<TestCase[]>(defaultTestCases);

  const [testCaseResults, setTestCaseResults] = useState<TestCase[] | null>(
    null
  );

  const runCases = async (cases: TestCase[]) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/v1/batch`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: prompt,
          inputs: cases,
        }),
      }
    );

    console.log(response.json());
  };

  return (
    <TestCasesView
      {...{
        testCases,
        showRunButton,
        open,
        runCases,
        runButtonDisabled,
      }}
    />
  );
};

const TestCasesView = (props: {
  testCases: TestCase[];
  showRunButton?: boolean;
  open?: boolean;
  runCases: (cases: TestCase[]) => Promise<void>;
  runButtonDisabled?: boolean;
}) => {
  const {
    testCases,
    showRunButton = true,
    open = false,
    runCases,
    runButtonDisabled = false,
  } = props;

  const [expanded, setExpanded] = useState<boolean>(open);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <CardHeader
        title={
          <Grid
            container
            justifyContent={"space-between"}
            alignItems={"center"}
            spacing={5}
          >
            <Grid item>
              <Grid container alignItems={"center"} spacing={2}>
                <Grid item>
                  <IconButton onClick={handleExpandClick}>
                    <ExpandMore />
                  </IconButton>
                </Grid>
                <Grid item>
                  <Typography variant="h5">Test cases</Typography>
                </Grid>
              </Grid>
            </Grid>
            {showRunButton && (
              <Grid item>
                <Button
                  variant="contained"
                  disabled={runButtonDisabled}
                  onClick={() => {
                    runCases(testCases);
                  }}
                >
                  Run Cases
                </Button>
              </Grid>
            )}
          </Grid>
        }
      />
      <Collapse in={expanded}>
        <CardContent>
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography
                      style={{
                        fontFamily: "monospace",
                      }}
                    >{`{{action}}`}</Typography>
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
                {testCases.map((testCase, index) => (
                  <TestCaseRow key={index} {...{ testCase }} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export { TestCases };
