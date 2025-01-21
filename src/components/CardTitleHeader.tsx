import { Typography } from "@mui/material";

interface IProps {
  title: string;
  color?: string;
}

const CardTitleHeader = ({ title, color = "secondary" }: IProps) => {
  return (
    <Typography
      variant="subtitle2"
      textTransform="uppercase"
      color={color}
      gutterBottom
    >
      {title}
    </Typography>
  );
};

export default CardTitleHeader;
