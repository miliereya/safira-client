import { FC } from "react"
import { SVGProps } from "../../types/SVGProps"


export const DoubleArrow: FC<SVGProps> = ({ width = 21, height = 21, fill = '#fff'}) => {
	return (
		<svg width={width} height={height} fill={fill} viewBox='0 0 1792 1792' xmlns='http://www.w3.org/2000/svg'>
			<path d='M1395 1312q0 13-10 23l-50 50q-10 10-23 10t-23-10l-393-393-393 393q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l466 466q10 10 10 23zm0-384q0 13-10 23l-50 50q-10 10-23 10t-23-10l-393-393-393 393q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l466 466q10 10 10 23z' />
		</svg>
	)
}
