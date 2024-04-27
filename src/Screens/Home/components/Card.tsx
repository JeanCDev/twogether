import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CardCmp = ({
  title,
  contentTitle,
  contentBody,
  icon
}) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{contentTitle}</div>
        <p className="text-xs text-muted-foreground">{contentBody}</p>
      </CardContent>
    </Card>
  );
};

export default CardCmp;