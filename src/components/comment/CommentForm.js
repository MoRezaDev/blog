import { useMutation } from "@apollo/client";
import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { SEND_COMMENT } from "../../graphql/mutation";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RTL from "../../mui/RTL";

const CommentForm = ({ slug }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [pressed, setPressed] = useState(false);

  const [sendComment, { loading, data, errors }] = useMutation(SEND_COMMENT, {
    variables: {
      name,
      email,
      text,
      slug,
    },
  });

  const sendHandler = () => {
    if (name && email && text) {
      sendComment();
      setPressed(true);
    } else {
      toast.warn("فیلد ها تماما باید پر شوند", {
        position: "top-center",
      });
    }
  };

  if (data && pressed) {
    toast.success("کامنت ارسال شد و منتظر تایید می باشد", {
      position: "top-center",
    });
    setPressed(false);
  }
  console.log(data);
  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
        borderRadius: 4,
        py: 1,
        mt: 5,
      }}
    >
      <Grid item xs={12} m={2}>
        <Typography component="p" variant="h6" fontWeight={700} color="primary">
          فرم ارسال کامنت
        </Typography>
      </Grid>
      <Grid item xs={12} m={2}>
        <div dir="rtl">
          <TextField
            variant="outlined"
            label="نام کاربری"
            sx={{ width: "100%" }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="ایمیل"
          sx={{ width: "100%" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="متن کامنت"
          sx={{ width: "100%" }}
          value={text}
          onChange={(e) => setText(e.target.value)}
          multiline
          minRows={4}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        {loading ? (
          <Button variant="contained" disabled>
            در حال ارسال....
          </Button>
        ) : (
          <Button onClick={sendHandler} variant="contained">
            ارسال
          </Button>
        )}
      </Grid>
      <ToastContainer />
    </Grid>
  );
};

export default CommentForm;
