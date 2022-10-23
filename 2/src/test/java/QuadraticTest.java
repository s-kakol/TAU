import org.junit.jupiter.api.*;
import s20163.Quadratic;

@DisplayName("Quadratic Equations Solver Test")
public class QuadraticTest
{
    private final Quadratic quadratic = new Quadratic();

    @BeforeAll
    static void setup()
    {
        System.out.println("Initiating tests.");
    }

    @AfterAll
    static void fin()
    {
        System.out.println("Done!");
    }

    @Test
    void ifDiscriminant_IsEqualToZero_ReturnSingleRoot() throws Exception
    {
        float[] expectedArray = new float[]{-1};
        Assertions.assertArrayEquals(expectedArray, quadratic.solveQuadratic(1, 2, 1));
    }

    @Test
    void ifDiscriminant_IsPositive_ReturnTwoRoots_AllInputsPositive() throws Exception
    {
        float[] expectedArray = new float[]{-3, -1};
        Assertions.assertArrayEquals(
                expectedArray,
                quadratic.solveQuadratic(1, 4, 3)
        );
    }

    @Test
    void ifDiscriminant_IsPositive_ReturnTwoRoots_OneInputNegative() throws Exception
    {
        float[] expectedArray = new float[]{-4, 1};
        Assertions.assertArrayEquals(
                expectedArray,
                quadratic.solveQuadratic(1, 3, -4)
        );
    }

    @Test
    void ifDiscriminant_IsPositive_ReturnTwoRoots_AllInputsNegative() throws Exception
    {
        float[] expectedArray = new float[]{-1, -3};
        Assertions.assertArrayEquals(
                expectedArray,
                quadratic.solveQuadratic(-1, -4, -3)
        );
    }

    @Test
    void ifAnyInput_IsNotInstanceOfNumber_ThrowException()
    {
        Throwable exception = Assertions.assertThrows(NumberFormatException.class, () -> {
            quadratic.solveQuadratic(4, Integer.parseInt("b"), 2);
        });
    }

    @Test
    void ifValueOfNumber_A_IsZero_ThrowException()
    {
        Throwable exception = Assertions.assertThrows(IllegalArgumentException.class, () -> {
            quadratic.solveQuadratic(0, 5, 5);
        });

        Assertions.assertEquals(
                "Value of \'a\' can not be 0",
                exception.getMessage()
        );
    }

    @Test
    void ifDiscriminant_IsNegative_ThrowException()
    {
        Throwable exception = Assertions.assertThrows(Exception.class, () -> {
            quadratic.solveQuadratic(1, 1, 1);
        });

        Assertions.assertEquals(
                "No solutions in real numbers set",
                exception.getMessage()
        );
    }
}