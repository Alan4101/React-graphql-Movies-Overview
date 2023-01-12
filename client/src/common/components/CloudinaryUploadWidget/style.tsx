import { Box, IconButton} from "@mui/material"
import { styled } from "@mui/system"
export const styles = {
  gridContainer: {
    gap: "10px",
    padding: '8px 0',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  boxStyle: {
    position: "relative",
    width: "150px",
    height: "100px",
    borderRadius: "4px",
    border: "2px dashed #ccc",
    flexShrink: 0,
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    zIndex: '-1',
    borderRadius: '8px',
  },
  emptyBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  iconButton: {
    width: "20px",
    height: "20px",
    border: "1px solid #1976d2",
    padding: 0,
    fontSize: '12px',
    backgroundColor: "#fff",
  },
}
export const InputUploadFile = styled("input")({
  opacity: 0,
  zIndex: "-1",
  position: "absolute",
})
export const LableUploadFile = styled("label")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
})
export const EditBox = styled(Box)({
    position: "absolute",
    top: "-10px",
    right: "-10px",
})
export const RemoveButton = styled(IconButton)({
  width: "20px",
  height: "20px",
  border: "1px solid #1976d2",
  padding: 0,
  fontSize: '12px',
  backgroundColor: "#fff",
  '&:hover': {
    backgroundColor: '#d32f2f',
    color: '#fff',
    border: 'none'
  }
})