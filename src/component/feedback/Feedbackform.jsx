import { Box, Button, TextField } from '@mui/material'
import React from 'react'

const Feedbackform = ({close}) => {
  return (
    <div className='feebackwrap' onClickCapture={close} onClick={()=>close(false)}>
      <Box className='formfeed' component="section" sx={{ p: 2, border: '1px dashed grey' }} onClick={(e) => e.stopPropagation()}>
        <Button variant="contained" className='bg-pink-500! cross' onClick={()=>close(false)}>X</Button>
      <TextField id="outlined-basic" label="Full Name" variant="outlined" type="text"/>
      <TextField id="outlined-basic" label="Email" variant="outlined" type="email"/>
      <TextField id="outlined-basic" label="Subject" variant="outlined" type="text"/>
      <TextField
  label="Comments"
  multiline
  minRows={2}
  maxRows={4} // Optional: caps height
  variant="outlined"
  fullWidth
/>
<Button variant="contained" className='bg-green-600!'>Submit</Button>
    </Box>
    </div>
  )
}

export default Feedbackform
 