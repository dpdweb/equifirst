
import MortgageCalculator from '../components/MortgageCalculator';
import SubPageHeaderSpacer from "../components/SubPageHeaderSpacer";

export default function Page() {
  return (
    <div>
    <SubPageHeaderSpacer />
    <div className="p-6">
      <MortgageCalculator />
    </div>
    </div>
  );
}