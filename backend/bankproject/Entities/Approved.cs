using System;
using System.Collections.Generic;

namespace bankproject.Entities;

public partial class Approved
{
    public int Id { get; set; }

    public string Accountno { get; set; } = null!;

    public string? Accpin { get; set; }

    public string? Ifsccode { get; set; }

    public int Customerid { get; set; }

    public virtual Customer Customer { get; set; } = null!;
}
