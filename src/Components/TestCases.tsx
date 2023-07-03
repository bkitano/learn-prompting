"use client";

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
  CircularProgress,
  Collapse,
  Grid,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import ExpandMore from "@mui/icons-material/ExpandMore";

// const TestCaseAnswer = (props: {
//   correctAnswer?: boolean;
//   correctResponse?: boolean;
//   loading: boolean;
// }) => {
//   const { loading, correctAnswer, correctResponse } = props;
//   if (loading) {
//     return <CircularProgress />;
//   }
//   if (answer === undefined) {
//     return null;
//   }
//   if (correct !== undefined) {
//     return correct ? (
//       <span style={{ color: "green" }}>{answer}</span>
//     ) : (
//       <span style={{ color: "red" }}>{answer}</span>
//     );
//   } else {
//     return <span>{answer}</span>;
//   }
// };

const TestCaseRow = (props: { testCase: TestCase; loading?: boolean }) => {
  const theme = useTheme();
  const { testCase, loading } = props;
  const [open, setOpen] = useState(false);
  return (
    <>
      <TableRow
        key={testCase.action}
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
          <Typography color={theme.palette.text.secondary}>
            {testCase.action}
          </Typography>
        </TableCell>
        <TableCell style={{}} align="center">
          <Typography color={theme.palette.text.secondary}>
            {String(testCase.correctAnswer)}
          </Typography>
        </TableCell>
        <TableCell align="center">
          {loading ? (
            <CircularProgress />
          ) : loading === undefined ? null : (
            <Typography color={theme.palette.text.secondary}>
              {testCase.response}
            </Typography>
          )}
        </TableCell>
      </TableRow>
    </>
  );
};

const TestCasesView = (props: {
  testCases?: TestCase[];
  hideRunButton?: boolean;
  open?: boolean;
  runCases?: () => Promise<void>;
  runButtonDisabled?: boolean;
  loading?: boolean;
}) => {
  const {
    testCases = defaultTestCases,
    open = false,
    runCases,
    runButtonDisabled = false,
    hideRunButton = false,
    loading = false,
  } = props;

  const theme = useTheme();

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
                  <Typography variant="h5" color={theme.palette.text.secondary}>
                    Test cases
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            {!hideRunButton && (
              <Grid item>
                <Button
                  variant="contained"
                  disabled={runButtonDisabled}
                  onClick={() => {
                    setExpanded(true);
                    runCases && runCases();
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
                      color={theme.palette.text.secondary}
                    >{`{{action}}`}</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography
                      variant="h6"
                      color={theme.palette.text.secondary}
                    >
                      Correct Answer
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography
                      variant="h6"
                      color={theme.palette.text.secondary}
                    >
                      Model Response
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {testCases.map((testCase, index) => (
                  <TestCaseRow
                    key={index}
                    loading={loading}
                    {...{ testCase }}
                  />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export { TestCasesView };
