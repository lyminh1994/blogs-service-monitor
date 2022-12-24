import { Doughnut } from "react-chartjs-2";
import type { ChartOptions } from "chart.js";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  useTheme,
} from "@mui/material";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import PhoneIcon from "@mui/icons-material/Phone";
import TabletIcon from "@mui/icons-material/Tablet";

const TrafficByDevice = () => {
  const data = {
    datasets: [
      {
        data: [63, 15, 22],
        backgroundColor: ["#3F51B5", "#e53935", "#FB8C00"],
        borderWidth: 8,
        borderColor: "#FFFFFF",
        hoverBorderColor: "#FFFFFF",
      },
    ],
    labels: ["Desktop", "Tablet", "Mobile"],
  };

  const options: ChartOptions = {
    animation: false,
    layout: { padding: 0 },
    maintainAspectRatio: false,
    responsive: true,
  };

  const devices = [
    {
      title: "Desktop",
      value: 63,
      icon: LaptopMacIcon,
      color: "#3F51B5",
    },
    {
      title: "Tablet",
      value: 15,
      icon: TabletIcon,
      color: "#E53935",
    },
    {
      title: "Mobile",
      value: 23,
      icon: PhoneIcon,
      color: "#FB8C00",
    },
  ];

  return (
    <Card sx={{ height: "100%" }}>
      <CardHeader title="Traffic by Device" />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 300,
            position: "relative",
          }}
        >
          <Doughnut data={data} options={options} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: 2,
          }}
        >
          {devices.map(({ color, icon: Icon, title, value }) => (
            <Box
              key={title}
              sx={{
                p: 1,
                textAlign: "center",
              }}
            >
              <Icon color="action" />
              <Typography color="textPrimary" variant="body1">
                {title}
              </Typography>
              <Typography style={{ color }} variant="h4">
                {value}%
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default TrafficByDevice;
