import { Legend, RadialBar, RadialBarChart, Tooltip } from 'recharts';
const data1 = [
 
    {
        "name": "Bank",
        "uv": 8.22,
        "pv": 9800,
        "fill": "#F3BA2F"
    },
    {
        "name": "Token",
        "uv": 26.69,
        "pv": 4567,
        "fill": "#83a6ed"
    },
    {
        "name": "Cash",
        "uv": 8.22,
        "pv": 4800,
        "fill": "#0F0F3F"
    },
    {
        "name": "Stock",
        "uv": 6.67,
        "pv": 4800,
        "fill": "#9020E9"
    }
]
const MoneyChart = () => {
    return (
        <RadialBarChart
            width={760}
            height={400}
            innerRadius="30%"
            outerRadius="100%"
            data={data1}
            startAngle={90}
            endAngle={450}
        >
            <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='uv' />
            <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
            <Tooltip />
        </RadialBarChart>
    )
}
export {MoneyChart}