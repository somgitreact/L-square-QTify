import { Autocomplete, Box, TextField } from '@mui/material'
import React from 'react'

const Search = ({placeholder, data}) => {
  console.log("srarch data", data);
  //  const [value, setValue] = useState();
  // const [inputValue, setInputValue] =useState('');
  // value={value}
      //   onChange={(event, newValue) => {
      //     setValue(newValue);
      //   }}
      //   inputValue={inputValue}
      //   onInputChange={(event, newInputValue) => {
      //     setInputValue(newInputValue);
      //   }}
  return (
    <div className='flex justify-between items-stretch bg-white border border-gray-900 rounded-sm min-w-[360] w-[27%] pl-5 '> 
    <Autocomplete className=' w-full outline-0 border-0 '
      id="country-select-demo"
      sx={{ width: "100%", border:0, outline:0 }}
      options={data}
      autoHighlight
      getOptionLabel={(option) => option.title}
      renderOption={(props, option) => {
        const { key, ...optionProps } = props;
        return (
          <Box
            key={key}
            component="li"
            sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
            {...optionProps}
          >
            <img
              loading="lazy"
              width="30"
              //srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
              src={option.image}
              alt=""
            />
            {option.title} 
          </Box>
        );
      }}
      renderInput={(params) => (
        <TextField 
          {...params}
          label={placeholder}
          slotProps={{
            htmlInput: {
              ...params.inputProps,
              autoComplete: 'new-password', // disable autocomplete and autofill
            },
          }}
        />
      )}
    />

        <div className='border-l border-gray-900 px-5 py-3'><img src='searchicon.svg'  /> </div>
    </div>
  )
}



export default Search