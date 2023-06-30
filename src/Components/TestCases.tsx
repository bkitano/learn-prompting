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
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { testCases as defaultTestCases } from "@/resources/testCases";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Collapse,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

type TestCase = {
  description: string;
  correctAnswer: boolean;
  promptAnswer?: boolean;
  explanation?: string;
};

const TestCases = (props: { showRunButton?: boolean; open?: boolean }) => {
  const { showRunButton, open } = props;
  const [testCases, setTestCases] = useState<TestCase[]>(defaultTestCases);
  return (
    <TestCasesView
      {...{
        testCases,
        showRunButton,
        open,
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
        <TableCell>
          <Collapse>{testCase.explanation}</Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

const TestCasesView = (props: {
  testCases: TestCase[];
  showRunButton?: boolean;
  open?: boolean;
}) => {
  const { testCases, showRunButton = true, open = false } = props;

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
          >
            <Grid item xs={1}>
              <IconButton onClick={handleExpandClick}>
                <ExpandMore />
              </IconButton>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="h5">Test cases</Typography>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        }
        action={
          showRunButton && (
            <Button
              variant="contained"
              onClick={() => {
                console.log("run");
              }}
            >
              Run Cases
            </Button>
          )
        }
      />
      <Collapse in={expanded}>
        <CardContent>
          <TableContainer>
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
