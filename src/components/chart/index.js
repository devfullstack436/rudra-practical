import { VerticalBarChart } from "amazing-react-charts";
import { AreaChart } from "amazing-react-charts";
import { DonutChart } from "amazing-react-charts";
import { HorizontalBarChart } from "amazing-react-charts";
import { PieChart } from "amazing-react-charts";
import { CoordinateLineChart } from "amazing-react-charts";

const Chart = ({ data }) => {
  let {
    VerticalChartData,
    AreaChartData,
    DonutChartData,
    HorizontalBarChartData,
    PieChartData,
    CoordinateLineChartData,
  } = data || {};
  console.log({
    VerticalChartData,
    AreaChartData,
    DonutChartData,
    HorizontalBarChartData,
    PieChartData,
    CoordinateLineChartData,
  });

  return (
    <div className="chart-content">
      <div className="chartrow">
        {VerticalChartData && (
          <div className="chart1">
            <h4>VerticalBar Chart</h4>

            <VerticalBarChart
              color="green"
              xType="category"
              barWidth={100}
              yComplement="%"
              tooltip={{
                label: "Axis x tooltip label",
                result: "Axis y tooltip label",
              }}
              data={VerticalChartData}
            />
          </div>
        )}

        {AreaChartData && (
          <div className="chart2">
            <h4>Area Chart</h4>

            <AreaChart
              color="#fff"
              xType="category"
              lineMarkValue={3}
              lineMarkColor="#E65100"
              lineMakeName="mark"
              title="mark"
              toolboxTooltip={{ saveAsImage: "Save as image" }}
              yComplement="%"
              dateFormat={"yyyy-MM"}
              tooltipComplement="goals"
              tooltip={{ label: "Data", result: "RAV" }}
              data={AreaChartData || []}
            />
          </div>
        )}
      </div>

      <div className="chartrow">
        {DonutChartData && (
          <div className="chart3">
            <h4>Donut Chart</h4>

            <DonutChart
              selectedMode
              colors={["blue", "green"]}
              legendPosition="inside"
              labelFontColor="white"
              centerPieValueFontSize={28}
              resultFormatType="percent"
              toolboxTooltip={{ saveAsImage: "saving" }}
              title="Pesquisas relacionadas"
              center={["50%", "50%"]}
              donutRadius={["40%", "70%"]}
              donutCenterValue="83,35%"
              data={DonutChartData}
            />
          </div>
        )}

        {HorizontalBarChartData && (
          <div className="chart4">
            <h4>HorizontalBar Chart</h4>

            <HorizontalBarChart
              boldTickLabel
              showTickInfos
              marginLeftTitle="50%"
              title="RYG graph"
              xType="time"
              onClickBar={(item) => window.alert(item.data.value)}
              tooltip={{
                label: "Criticity",
                result: "Amount (percentage)",
              }}
              data={HorizontalBarChartData || []}
            />
          </div>
        )}
      </div>

      <div className="chartrow">
        {PieChartData && (
          <div className="chart5">
            <h4>Pie Chart</h4>

            <PieChart
              legendType="scroll"
              colors={["blue", "green", "red", "purple", "black"]}
              legendPosition="inside"
              radius="75%"
              toolboxTooltip={{ saveAsImage: "saving" }}
              title="pie chart"
              center={["50%", "50%"]}
              data={PieChartData || []}
            />
          </div>
        )}

        {CoordinateLineChartData && (
          <div className="chart6">
            <h4>CoordinateLine Chart</h4>
            <CoordinateLineChart
              title="Respiratory volume chart"
              toolboxTooltip={{ saveAsImageWithTitle: "save as image" }}
              height={400}
              xMaxValue={8}
              legendNames={["ref", "pre", "pos"]}
              coordinateNames={{
                x: "Volume (L)",
                y: "Fluxo (L/s)",
              }}
              colors={["gray", "orange", "green"]}
              coordinates={CoordinateLineChartData || []}
            />
          </div>
        )}
      </div>
    </div>
  );
};
export default Chart;
