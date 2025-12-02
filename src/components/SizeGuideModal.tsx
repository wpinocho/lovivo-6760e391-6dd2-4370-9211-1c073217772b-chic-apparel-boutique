import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Ruler } from 'lucide-react';

const sizeChart = [
  { size: 'XS', bust: '32-33', waist: '24-25', hips: '35-36', inseam: '29' },
  { size: 'S', bust: '34-35', waist: '26-27', hips: '37-38', inseam: '29.5' },
  { size: 'M', bust: '36-37', waist: '28-29', hips: '39-40', inseam: '30' },
  { size: 'L', bust: '38-40', waist: '30-32', hips: '41-43', inseam: '30.5' },
  { size: 'XL', bust: '41-43', waist: '33-35', hips: '44-46', inseam: '31' }
];

export const SizeGuideModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Ruler className="h-4 w-4" />
          Size Guide
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-light tracking-tight">Size Guide</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-medium mb-2">How to Measure</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li><strong>Bust:</strong> Measure around the fullest part of your bust</li>
              <li><strong>Waist:</strong> Measure around the narrowest part of your natural waistline</li>
              <li><strong>Hips:</strong> Measure around the fullest part of your hips</li>
              <li><strong>Inseam:</strong> Measure from crotch to ankle</li>
            </ul>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium">Size</th>
                  <th className="text-left py-3 px-4 font-medium">Bust (inches)</th>
                  <th className="text-left py-3 px-4 font-medium">Waist (inches)</th>
                  <th className="text-left py-3 px-4 font-medium">Hips (inches)</th>
                  <th className="text-left py-3 px-4 font-medium">Inseam (inches)</th>
                </tr>
              </thead>
              <tbody>
                {sizeChart.map((row) => (
                  <tr key={row.size} className="border-b hover:bg-muted/50">
                    <td className="py-3 px-4 font-medium">{row.size}</td>
                    <td className="py-3 px-4">{row.bust}</td>
                    <td className="py-3 px-4">{row.waist}</td>
                    <td className="py-3 px-4">{row.hips}</td>
                    <td className="py-3 px-4">{row.inseam}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-muted/30 p-4 text-sm">
            <p className="text-muted-foreground">
              <strong>Fit Notes:</strong> Our pieces are designed with a relaxed, contemporary fit. 
              For a more tailored look, we recommend sizing down. If between sizes, size up for comfort.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};