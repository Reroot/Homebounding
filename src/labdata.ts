interface LabResults {
    Product: string;
    PackageType: string;
    ProductType: string;
    ProductName: string;
    Price: string;
    ProductUnit: string;
    IntervalMin: any;
    IntervalMax: string;
    IntervalMean: string;
    Units: string;
  }

export const labdata: LabResults[] = [
    {
      Product: "1",
      ProductType: "Blood Test",
      PackageType: "Individual",
      ProductName: "Red Blood Cells",
      Price: "$10",
      ProductUnit: "Per Test",
      IntervalMin: "3.77",
      IntervalMax: "5.28",
      IntervalMean: "4.53",
      Units: "x10E6/uL"
    },
    {
      Product: "2",
      ProductType: "Blood Test",
      PackageType: "Individual",
      ProductName: "White Blood Cells",
      Price: "$15",
      ProductUnit: "Per Test",
      IntervalMin: "3.4",
      IntervalMax: "10.8",
      IntervalMean: "7.1",
      Units: "x10E3/uL"
    },
    {
      Product: "3",
      ProductType: "Blood Test",
      PackageType: "Individual",
      ProductName: "Platelets",
      Price: "$5",
      ProductUnit: "Per Test",
      IntervalMin: "150",
      IntervalMax: "450",
      IntervalMean: "300",
      Units: "x10E3/uL"
    },
    {
      Product: "4",
      ProductType: "Blood Test",
      PackageType: "Individual",
      ProductName: "Total Cholesterol",
      Price: "$35",
      ProductUnit: "Per Test",
      IntervalMin: "100",
      IntervalMax: "199",
      IntervalMean: "150",
      Units: "mg/dL"
    },
    {
      Product: "5",
      ProductType: "Blood Test",
      PackageType: "Individual",
      ProductName: "Triglycerides",
      Price: "$30",
      ProductUnit: "Per Test",
      IntervalMin: "0",
      IntervalMax: "149",
      IntervalMean: "75",
      Units: "mg/dL"
    },
    {
      Product: "6",
      ProductType: "Blood Test",
      PackageType: "Individual",
      ProductName: "Glucose",
      Price: "$20",
      ProductUnit: "Per Test",
      IntervalMin: "65",
      IntervalMax: "99",
      IntervalMean: "82",
      Units: "mg/dL"
    },
    {
      Product: "7",
      ProductType: "Blood Test",
      PackageType: "Individual",
      ProductName: "Sodium",
      Price: "$25",
      ProductUnit: "Per Test",
      IntervalMin: "134",
      IntervalMax: "144",
      IntervalMean: "139",
      Units: "mmol/L"
    }
  ]

  