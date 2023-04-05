using System;
using System.Collections.Generic;

namespace bankproject.Entities;

public partial class Approver
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public string Emailid { get; set; } = null!;

    public string Password { get; set; } = null!;
}
