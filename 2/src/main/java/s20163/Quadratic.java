package s20163;

public class Quadratic
{
    private float[] getTwoRoots(int a, int b, int discriminant)
    {
        float[] roots = new float[2];
        roots[0] = roundNum((-b - Math.sqrt(discriminant)) / (2 * a));
        roots[1] = roundNum((-b + Math.sqrt(discriminant)) / (2 * a));

        return roots;
    }

    private float[] getSingleRoot(int a, int b)
    {
        float[] roots = new float[1];
        roots[0] = roundNum(-b / (2 * a));

        return roots;
    }

    static float roundNum(double x)
    {
        return Math.round(x * 100)/100;
    }

    static boolean isInt(int x)
    {
        try
        {
            Integer.parseInt(String.valueOf(x));
            return true;
        }
        catch (NumberFormatException e)
        {
            return false;
        }
    }

    public float[] solveQuadratic(int a, int b, int c) throws Exception {
        isInt(a);
        isInt(b);
        isInt(c);

        if (a == 0) throw new IllegalArgumentException("Value of 'a' can not be 0");

        int discriminant = b * b - 4 * a * c;

        if (discriminant < 0) throw new Exception("No solutions in real numbers set");

        return discriminant == 0
                ? getSingleRoot(a, b)
                : getTwoRoots(a, b, discriminant);
    }
}