<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html >
            <body style="background: azure; color: navy; text-align:center;">
                <h1>Student Details</h1>
                <table align="center" style="border:2px solid burlywood; padding: 20px;text-align: center; font-size: 25px;">
                    <xsl:for-each select="details">
                        <tr>
                            <td>Name</td>
                            <td>
                                <xsl:value-of select="name"/>
                            </td>
                        </tr>
                        <tr>
                            <td>About</td>
                            <td>
                                <xsl:value-of select="about"/>
                            </td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>
                                <xsl:value-of select="email"/>
                            </td>
                        </tr>
                        <tr>
                            <td>Roll No</td>
                            <td>
                                <xsl:value-of select="rollno"/>
                            </td>
                        </tr>
                        <tr>
                            <td>Institute</td>
                            <td>
                                <xsl:value-of select="institute"/>
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>